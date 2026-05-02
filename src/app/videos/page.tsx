'use client';

import React, { useState } from "react";

const VIDEO_FILES = [
  { 
    id: "001", 
    src: "/assets/videos/video01.mp4",
    poster: "/assets/thumbnails/img1.jpg",
    title: "¿VILLANO_O_HEROE?", 
    category: "PROJECT_NEO // ANALYSIS",
    desc: "Análisis de narrativa oscura y descenso psicológico."
  },
  { 
    id: "002", 
    src: "/assets/videos/video02.mp4", 
    poster: "/assets/thumbnails/img2.jpg", 
    title: "MIKU_V2_PROTOTYPE", 
    category: "AUDIO_VISUAL // MUSIC",
    desc: "Renderizado de performance vocaloid optimizado."
  },
  {
    id: "003", 
    src: "/assets/videos/video03.mp4", 
    poster: "/assets/thumbnails/img3.jpg", 
    title: "HATSUNE_MIKU_DANCE", 
    category: "ANIMATION // TEST",
    desc: "Secuencia de coreografía rítmica activa."
  },
  {
    id: "004", 
    src: "/assets/videos/video04.mp4", 
    poster: "/assets/thumbnails/img4.png", 
    title: "THRONE_AND_LIBERTY_EXP", 
    category: "MMORPG // ARCHIVE",
    desc: "Registro de exploración en Solisium."
  }
];

export default function VideosPage() {
  const [activeVideo, setActiveVideo] = useState<typeof VIDEO_FILES[0] | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20 px-6 md:px-20 font-sans selection:bg-red-600 overflow-x-hidden">
      
      
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-50 bg-[length:100%_2px,3px_100%]"></div>

      <div className="max-w-7xl mx-auto relative">
        
        
        <header className="mb-24 relative">
            <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-red-600"></div>
          </div>
          
          <h1 className="font-sans font-[800] italic tracking-tighter uppercase text-6xl md:text-8xl">
            BROADCAST<span className="text-pr-red animate-pulse">_</span>
          </h1>
          <div className="flex flex-wrap gap-x-12 gap-y-2 border-t border-white/10 pt-6">
            <div className="flex flex-col">
              <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Directory</span>
              <span className="text-xs font-mono">root/prøyet_red/media/visuals</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Encoding</span>
              <span className="text-xs font-mono text-red-500">RAW_ENCODER_V3</span>
            </div>
            <div className="flex flex-col ml-auto">
              <span className="text-xs font-mono text-right">[ AUTHORIZED ]</span>
            </div>
          </div>
        </header>

        
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-10 space-y-12">
          {VIDEO_FILES.map((video) => (
            <div 
              key={video.id} 
              className="break-inside-avoid group relative cursor-pointer"
              onClick={() => setActiveVideo(video)}
              onMouseEnter={() => setHoveredId(video.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              
              <div className="relative w-full bg-zinc-950 rounded-sm overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-[0_0_50px_rgba(239,68,68,0.2)] group-hover:-translate-y-2">
                
                <img 
                  src={video.poster}
                  alt={video.title}
                  className={`w-full h-auto object-contain transition-opacity duration-700 ${
                    hoveredId === video.id ? 'opacity-0' : 'opacity-60'
                  }`}
                />

                <div className={`absolute inset-0 transition-opacity duration-700 ${
                  hoveredId === video.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  {hoveredId === video.id && (
                    <video 
                      src={video.src}
                      className="w-full h-full object-cover"
                      muted loop playsInline autoPlay
                    />
                  )}
                </div>

                
                <div className="absolute top-0 inset-x-0 p-4 flex justify-between items-start z-40 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-2 group-hover:translate-y-0">
                    <div className="bg-red-600 text-[8px] font-mono font-black px-2 py-0.5 tracking-tighter italic">
                    {video.id}
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-1 h-1 bg-white/40 rounded-full"></div>
                    ))}
                  </div>
                </div>

                <div className="absolute inset-0 border border-white/5 group-hover:border-red-600/50 transition-colors duration-500 z-30 pointer-events-none"></div>
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
              </div>

              
              <div className="mt-5 px-1 relative">
                <div className="flex items-center gap-2 mb-2">
                   <span className="w-1.5 h-1.5 bg-red-600 rotate-45"></span>
                   <p className="text-[10px] font-mono text-red-500 font-bold tracking-[0.2em] uppercase">
                     {video.category}
                   </p>
                </div>
                
                <h3 className="text-2xl font-black tracking-tighter uppercase italic leading-[0.8] text-white group-hover:text-red-500 transition-all duration-300">
                  {video.title}
                </h3>
                
                <div className="mt-3 h-[1px] w-0 group-hover:w-full bg-red-600/30 transition-all duration-700"></div>
                
                <p className="mt-3 text-[11px] font-mono text-zinc-500 leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity">
                  {video.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        
        {activeVideo && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-500">
            <div className="absolute inset-0 bg-black/98 backdrop-blur-3xl" onClick={() => setActiveVideo(null)}></div>
            <div className="relative z-10 w-full max-w-6xl flex flex-col items-center">
              
              <div className="w-full flex justify-between items-end mb-6 font-mono">
                <div className="text-left">
                   <p className="text-[10px] text-red-600 tracking-widest font-bold">Cargando contenido...</p>
                   <h2 className="text-3xl font-black italic tracking-tighter uppercase">{activeVideo.title}</h2>
                </div>
                <button onClick={() => setActiveVideo(null)} className="text-zinc-600 hover:text-red-500 text-[10px] tracking-[0.4em] uppercase border border-zinc-800 px-6 py-2 bg-black transition-all">
                  Cerrar
                </button>
              </div>

              <div className="relative w-full border border-white/10 shadow-[0_0_100px_rgba(239,68,68,0.1)]">
                <video src={activeVideo.src} className="w-full h-auto max-h-[70vh]" controls autoPlay />
              </div>

              <div className="w-full mt-6 grid grid-cols-3 gap-8 border-t border-white/10 pt-6">
                <div className="flex flex-col gap-1">
                   <span className="text-[9px] font-mono text-zinc-500 uppercase">Archive_ID</span>
                   <span className="text-xs font-mono">{activeVideo.id}</span>
                </div>
                <div className="flex flex-col gap-1">
                   <span className="text-[9px] font-mono text-zinc-500 uppercase">Tags</span>
                   <span className="text-xs font-mono text-red-500">{activeVideo.category}</span>
                </div>
                <div className="flex flex-col gap-1 text-right">
                   <span className="text-[9px] font-mono text-zinc-500 uppercase">Timestamp</span>
                   <span className="text-xs font-mono">{new Date().toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </main>
  );
}