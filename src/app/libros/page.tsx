'use client';

import TechBackground from "@/components/TechBackground";
import { motion } from "framer-motion";
const Motion = motion as unknown as any;
import { useState, useEffect } from "react";

// DATA EXPANDIDA: Libros Principales y Archivos de Personajes
const BIBLIOTECA = [
  { 
    id: 'BOOK_01', 
    subject: 'WORLD BIBLE', 
    type: 'CORE_DOCUMENTATION', 
    status: 'ONGOING', 
    desc: 'La biblia fundamental del mundo. Contiene las leyes, la cronología y el diseño bio-mecánico de la sociedad.' 
  },
  { 
    id: 'BOOK_02', 
    subject: 'PROJECT NERO', 
    type: 'NARRATIVE_LOG', 
    status: 'IN_PROGRESS', 
    desc: 'Registro detallado de la historia de Nero. Exploración de las instalaciones de superficie y la relación con Nova.' 
  },
  { 
    id: 'FILE_01', 
    subject: 'NOVA_RECORDS', 
    type: 'SUBJECT_ARCHIVE', 
    status: 'ACTIVE', 
    desc: 'Expediente técnico sobre la integración neuronal de Nova y su desarrollo bio-mecánico.' 
  },
  { 
    id: 'FILE_02', 
    subject: 'B-765_SPECS', 
    type: 'UNIT_DATA', 
    status: 'DECOMMISSIONED', 
    desc: 'Planos y registros de combate de la unidad de defensa pesada B-765.' 
  },
];

const LiveStatus = () => {
  const [time, setTime] = useState("");
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-6 text-[9px] text-zinc-500 font-mono mb-8 border-b border-white/5 pb-2">
      <div className="flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
        SISTEMA_ACTIVO
      </div>
      <div>LOC: MARACAIBO_SRV</div>
      <div>TME: {time}</div>
    </div>
  );
};

export default function LibrosPage() {


  return (
    <main className="relative min-h-screen bg-black text-zinc-400 font-mono p-8 pt-32 overflow-hidden">
      
      
      <TechBackground 
        opacity={0.15} 
        imagePath="/assets/images/wallpaper7.jpg" 
      />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <LiveStatus />

        <header className="mb-12 border-l-4 border-red-600 pl-6 py-2">
          <h1 
            className="text-white text-4xl md:text-6xl font-black italic uppercase tracking-tighter hover-glitch cursor-default"
          >
            Data_Archive<span className="animate-pulse text-red-600">_</span>
          </h1>
          <p className="text-[10px] mt-2 tracking-[0.4em] text-red-900 font-bold">
            NERAEL_DATABASE // WORLD_BIBLE_ACCESS
          </p>
        </header>

        <div className="grid grid-cols-1 gap-4">
            {BIBLIOTECA.map((item, i) => (
              <Motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ x: 10, backgroundColor: "rgba(20, 20, 20, 0.8)" }}
              className={`group relative border p-6 flex flex-col md:flex-row justify-between items-start md:items-center cursor-pointer transition-all backdrop-blur-md ${
                item.id.includes('BOOK') 
                ? 'border-red-600/30 bg-zinc-950/60' // Estilo para Libros
                : 'border-white/5 bg-zinc-950/40'    // Estilo para Archivos
              }`}
            >
              <div className="z-10">
                <span className={`text-[9px] font-black tracking-widest ${
                  item.id.includes('BOOK') ? 'text-red-500' : 'text-zinc-600'
                }`}>
                  {item.id}
                </span>
                <h2 className="text-white text-2xl font-bold group-hover:text-red-500 transition-colors tracking-tight">
                  {item.subject}
                </h2>
                <p className="text-zinc-500 text-xs mt-2 max-w-xl leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="text-right text-[10px] mt-4 md:mt-0 z-10 font-bold uppercase tracking-widest min-w-[150px]">
                <p className="text-zinc-600">Class: <span className="text-zinc-300">{item.type}</span></p>
                <p className="mt-1">Progress: <span className="text-emerald-500">{item.status}</span></p>
                
                
                {item.id.includes('BOOK') && (
                  <div className="mt-2 text-red-600 font-black text-[8px] animate-pulse">
                    [ MAIN_SAGA_FILE ]
                  </div>
                )}
              </div>
            </Motion.div>
          ))}
        </div>

        <footer className="mt-20 opacity-20 text-[8px] flex justify-between uppercase tracking-[0.5em]">
          <p>PRØYET_RED // NARRATIVE_ENGINE</p>
          <p>ESTADO: PROTEGIDO</p>
        </footer>
      </div>

      <style jsx global>{`
        .hover-glitch:hover {
          text-shadow: 2px 0 #ff0000, -2px 0 #00ffea;
          animation: glitch-anim 0.2s infinite linear alternate-reverse;
        }
        @keyframes glitch-anim {
          0% { transform: translate(0); }
          20% { transform: translate(-1px, 1px); }
          40% { transform: translate(-1px, -1px); }
          100% { transform: translate(0); }
        }
      `}</style>
    </main>
  );
}