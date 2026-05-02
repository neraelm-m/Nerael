import fs from 'fs';
import path from 'path';

async function findPdf(): Promise<{ filePath: string; filename: string } | null> {
  const candidates = [
    path.join(process.cwd(), 'public', 'assets', 'docs'),
    path.join(process.cwd(), 'public', 'assets', 'cv'),
    path.join(process.cwd(), 'public', 'assets'),
    path.join(process.cwd(), 'public'),
  ];

  for (const dir of candidates) {
    try {
      const files = await fs.promises.readdir(dir);
      const pdfs = files.filter(f => /\.pdf$/i.test(f));
      if (pdfs.length === 0) continue;

      // Prefer filenames containing 'cv' or 'david'
      let chosen = pdfs.find(f => /cv|david/i.test(f));
      if (!chosen) chosen = pdfs[0];

      return { filePath: path.join(dir, chosen), filename: chosen };
    } catch (e) {
      // directory doesn't exist or cannot be read — skip
      continue;
    }
  }

  return null;
}

export async function GET() {
  const found = await findPdf();

  if (!found) {
    return new Response('File not found', { status: 404 });
  }

  try {
    const stat = await fs.promises.stat(found.filePath);
    const file = await fs.promises.readFile(found.filePath);

    return new Response(file, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Length': String(stat.size),
        'Content-Disposition': `attachment; filename="${found.filename}"`,
      },
    });
  } catch (err) {
    return new Response('File not found', { status: 404 });
  }
}
