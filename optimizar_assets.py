#!/usr/bin/env python3
"""
Optimiza imágenes y videos de public/assets y actualiza las rutas en src/.

Uso (desde la raíz del proyecto):
    pip install pillow
    python optimizar_assets.py            # imágenes + videos
    python optimizar_assets.py --solo-imagenes
    python optimizar_assets.py --dry-run  # solo muestra lo que haría

- Imágenes (png/jpg > 120 KB) -> .webp (calidad 80, máx. 1920 px de ancho)
- Los originales se mueven a _originales/ (no se borran)
- Las rutas en src/**/*.astro se actualizan solas (.png/.jpg -> .webp)
- Videos (.mp4) -> recomprimidos con ffmpeg (720p, CRF 27, faststart)
  Requiere ffmpeg instalado: https://ffmpeg.org/download.html
"""
import argparse
import re
import shutil
import subprocess
import sys
from pathlib import Path
from urllib.parse import quote

ROOT = Path.cwd()
ASSETS = ROOT / "public" / "assets"
SRC = ROOT / "src"
BACKUP = ROOT / "_originales"
MIN_BYTES = 120 * 1024
MAX_WIDTH = 1920
# El logo y los íconos pequeños se dejan como están (PNG con transparencia nítida)
SKIP_NAMES = {"logo.png", "logo2.png"}


def kb(n):
    return f"{n / 1024:,.0f} KB"


def update_references(old_rel: str, new_rel: str, dry: bool):
    """old_rel / new_rel: rutas web, p. ej. /assets/images/wallpaper1.png"""
    variants = {old_rel: new_rel, quote(old_rel): quote(new_rel)}
    for f in SRC.rglob("*.astro"):
        text = f.read_text(encoding="utf-8")
        new = text
        for a, b in variants.items():
            new = new.replace(a, b)
        if new != text and not dry:
            f.write_text(new, encoding="utf-8")


def optimize_images(dry: bool):
    try:
        from PIL import Image
    except ImportError:
        sys.exit("Falta Pillow. Ejecuta: pip install pillow")

    total_before = total_after = 0
    for img in sorted(ASSETS.rglob("*")):
        if img.suffix.lower() not in {".png", ".jpg", ".jpeg"}:
            continue
        if img.name.lower() in SKIP_NAMES:
            continue
        size = img.stat().st_size
        if size < MIN_BYTES:
            continue

        out = img.with_suffix(".webp")
        rel_old = "/" + img.relative_to(ROOT / "public").as_posix()
        rel_new = "/" + out.relative_to(ROOT / "public").as_posix()

        if dry:
            print(f"[dry] {rel_old} ({kb(size)}) -> {rel_new}")
            continue

        with Image.open(img) as im:
            has_alpha = im.mode in ("RGBA", "LA") or "transparency" in im.info
            im = im.convert("RGBA" if has_alpha else "RGB")
            if im.width > MAX_WIDTH:
                h = round(im.height * MAX_WIDTH / im.width)
                im = im.resize((MAX_WIDTH, h), Image.LANCZOS)
            im.save(out, "WEBP", quality=80, method=6)

        new_size = out.stat().st_size
        if new_size >= size:  # no valió la pena
            out.unlink()
            print(f"= {rel_old}: WebP no es más liviano, se deja igual")
            continue

        dest = BACKUP / img.relative_to(ROOT)
        dest.parent.mkdir(parents=True, exist_ok=True)
        shutil.move(str(img), str(dest))
        update_references(rel_old, rel_new, dry)
        total_before += size
        total_after += new_size
        print(f"✓ {rel_old}: {kb(size)} -> {kb(new_size)}")

    if total_before:
        print(f"\nImágenes: {kb(total_before)} -> {kb(total_after)}")


def optimize_videos(dry: bool):
    if not shutil.which("ffmpeg"):
        print("\nffmpeg no está instalado: se omiten los videos.")
        return
    for vid in sorted(ASSETS.rglob("*.mp4")):
        size = vid.stat().st_size
        if dry:
            print(f"[dry] {vid.relative_to(ROOT)} ({kb(size)})")
            continue
        tmp = vid.with_suffix(".tmp.mp4")
        cmd = [
            "ffmpeg", "-y", "-loglevel", "error", "-i", str(vid),
            "-vf", "scale='min(1280,iw)':-2",
            "-c:v", "libx264", "-crf", "27", "-preset", "slow",
            "-c:a", "aac", "-b:a", "96k",
            "-movflags", "+faststart", str(tmp),
        ]
        if subprocess.run(cmd).returncode != 0 or not tmp.exists():
            print(f"✗ Error con {vid.name}")
            tmp.unlink(missing_ok=True)
            continue
        if tmp.stat().st_size >= size:
            tmp.unlink()
            print(f"= {vid.name}: ya estaba bien comprimido")
            continue
        dest = BACKUP / vid.relative_to(ROOT)
        dest.parent.mkdir(parents=True, exist_ok=True)
        shutil.move(str(vid), str(dest))
        tmp.rename(vid)
        print(f"✓ {vid.name}: {kb(size)} -> {kb(vid.stat().st_size)}")


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("--solo-imagenes", action="store_true")
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()

    if not ASSETS.exists():
        sys.exit("Ejecuta este script desde la raíz del proyecto (donde está public/).")

    optimize_images(args.dry_run)
    if not args.solo_imagenes:
        optimize_videos(args.dry_run)
    print("\nListo. Los originales están en _originales/. Prueba el sitio y bórralos cuando estés conforme.")
