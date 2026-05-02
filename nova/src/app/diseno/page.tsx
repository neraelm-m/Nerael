'use client';

import Image from "next/image";
import TechBackground from "@/components/TechBackground";

export default function DisenoPage() {
  return (
    /* Agregamos 'relative' y 'overflow-hidden' para que el fondo no se salga */
    <main className="relative min-h-screen bg-black overflow-hidden selection:bg-red-600">
      
      {/* 1. CAPA DE FONDO (Z-index 0 por defecto en el componente) */}
      <TechBackground 
        opacity={0.35} 
        imagePath="/assets/images/wallpaper7.jpg" 
      />

      {/* 2. CAPA DE CONTENIDO (Forzamos Z-index 10 para que flote sobre el fondo) */}
      <div className="relative z-10 p-10 md:p-24 pt-32 max-w-6xl mx-auto">
        
        {/* ENCABEZADO TÉCNICO */}
        <header className="mb-16">
          <h1 className="text-6xl font-bold text-white tracking-tighter mb-4 italic">
            STUDIO_<span className="text-red-500">!</span>
          </h1>
          <div className="flex flex-col md:flex-row md:items-center gap-4 text-zinc-500">
            <p className="uppercase text-[10px] tracking-[0.3em] font-bold border-r border-white/10 pr-4">
              Visual Assets & Strategic Branding
            </p>
            <p className="text-sm font-light">
              Desarrollo de identidades visuales, UI/UX y assets digitales optimizados para <span className="text-white">PRØYET_RED</span>.
            </p>
          </div>
        </header>

        {/* Malla de Proyectos (Grid dinámico) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* Proyecto 1: Logo Branding */}
          <div className="md:col-span-8 group relative aspect-video bg-zinc-900/50 border border-white/5 rounded-xl overflow-hidden hover:border-red-500/30 transition-all duration-500 backdrop-blur-sm">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-zinc-800 font-mono text-xs uppercase tracking-widest group-hover:text-red-500/50 transition-colors">
                [ Branding_Identity_v1 ]
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
              <h3 className="text-xl font-bold text-white">PRØYET_RED Identity</h3>
              <p className="text-zinc-400 text-xs mt-2 font-mono uppercase">Krita • Penpot • Branding</p>
            </div>
          </div>

          {/* Proyecto 2: Logo de la marca */}
          <div className="md:col-span-4 group relative aspect-square md:aspect-auto bg-zinc-900/50 border border-white/5 rounded-xl overflow-hidden hover:border-red-500/30 transition-all backdrop-blur-sm">
              <Image
                src="/assets/images/Proyet_Red.png"
                alt="Interface Architecture"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-sm font-bold">Interface Architecture</p>
              </div>
          </div>

          {/* ... El resto de tus proyectos ... */}

        </div>
      </div>
    </main>
  );
}