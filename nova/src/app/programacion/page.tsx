'use client';

import React from "react";
import { motion } from "framer-motion";
import TechBackground from "@/components/TechBackground"; // Asegúrate de haber creado el archivo anterior

const PROJECTS = [
  {
    id: "MOD_01",
    name: "VISION_CORE",
    tech: ["Python", "OpenCV", "PyTorch"],
    status: "STABLE",
    lines: "2.4k",
    description: "Sistema de reconocimiento de patrones y visión artificial optimizado para hardware de 4ta generación."
  },
  {
    id: "MOD_02",
    name: "PRØYET_ENGINE",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    status: "ACTIVE",
    lines: "1.8k",
    description: "Arquitectura base para sitios web de alto rendimiento con enfoque en branding agresivo."
  },
];

export default function ProgramacionPage() {
  return (
    <main className="relative min-h-screen bg-black text-white pt-32 pb-20 px-6 md:px-20 font-mono selection:bg-red-600 overflow-hidden">
      
      
      <TechBackground 
        opacity={0.35} 
        imagePath="/assets/images/wallpaper8.jpg" 
      />

      
      <div className="relative z-10 max-w-6xl mx-auto">
        
        
        <header className="mb-16 border-l-4 border-red-600 pl-6 py-2">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2 mb-2"
          >
            <span className="text-red-500 font-bold text-xs uppercase tracking-[0.4em]">Root@Nerael_Systems:~$</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-7xl font-sans font-[900] italic uppercase tracking-tighter"
          >
            DEVELOPMENT<span className="text-red-600">_</span>LAB
          </motion.h1>
        </header>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-zinc-950/80 border border-white/5 p-1 overflow-hidden backdrop-blur-sm"
            >
              
              <div className="bg-zinc-900/50 p-4 border-b border-white/5 flex justify-between items-center">
                <span className="text-[10px] text-zinc-500 font-bold tracking-widest">{project.id} // {project.name}</span>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-zinc-800"></div>
                  <div className="w-2 h-2 rounded-full bg-zinc-800"></div>
                  <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></div>
                </div>
              </div>

              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(t => (
                    <span key={t} className="text-[9px] border border-red-500/20 px-2 py-0.5 text-red-400 bg-red-500/5">
                      {t}
                    </span>
                  ))}
                </div>
                
                <p className="text-zinc-400 text-sm font-sans mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex justify-between items-end">
                  <div className="text-[9px] text-zinc-600 uppercase tracking-widest">
                    <p>Status: <span className="text-emerald-500">{project.status}</span></p>
                    <p>Lines: {project.lines}+</p>
                  </div>
                  
                  <a 
                    href="#" 
                    className="flex items-center gap-2 bg-white text-black text-[10px] font-black px-4 py-2 hover:bg-red-600 hover:text-white transition-all uppercase tracking-tighter"
                  >
                    View_Source_Code
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

              
              <div className="absolute top-0 right-0 p-1 opacity-10">
                <span className="text-[40px] font-black">{i + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>

        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-6 border border-white/5 bg-zinc-950/30 font-mono text-[10px] text-zinc-700 leading-tight backdrop-blur-sm"
        >
          <p className="">// [DEBUG_LOG] : Systems_Functional_Check...</p>
          <p className="text-emerald-900">/ Root Access: Confirmed</p>
          <p className="text-emerald-900">/ Maracaibo_Latam_Server: Online</p>
          <p className="">// End_of_Line</p>
        </motion.div>

      </div>
    </main>
  );
}