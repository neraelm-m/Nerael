'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'INICIO', path: '/' },
  { name: 'PROGRAMACIÓN', path: '/programacion' },
  { name: 'DISEÑO', path: '/diseno' },
  { name: 'LIBROS', path: '/libros' },
  { name: 'MEDIA', path: '/videos' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Bloqueo de scroll y cierre automático al cambiar de ruta
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // Cerrar menú si la pantalla se agranda (evita bugs de layout)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <nav className="fixed top-0 w-full z-[100] bg-black/80 backdrop-blur-md border-b border-white/5 px-6 py-4 font-mono">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          
          <Link href="/" onClick={() => setIsOpen(false)} className="group flex items-center gap-2 z-[110]">
            <div className="w-2 h-6 bg-red-600 group-hover:w-4 transition-all duration-300"></div>
            <span className="text-sm font-black tracking-[0.2em] text-white">
              PRØYET<span className="text-red-600">_</span>RED
            </span>
          </Link>

          
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <li key={link.name} className="relative py-2">
                    <Link
                      href={link.path}
                      className={`text-[10px] tracking-[0.3em] transition-colors ${
                        isActive ? 'text-red-500' : 'text-zinc-500 hover:text-white'
                      }`}
                    >
                      {link.name}
                    </Link>
                    {isActive && (
                      <motion.div 
                        layoutId="nav-active" 
                        className="absolute bottom-0 left-0 w-full h-[1px] bg-red-600" 
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden z-[200] flex flex-col gap-1.5 p-2 focus:outline-none"
            aria-label="Menu"
          >
            <motion.div 
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-6 h-[2px] bg-white origin-center" 
            />
            <motion.div 
              animate={isOpen ? { opacity: 0, x: 20 } : { opacity: 1, x: 0 }}
              className="w-6 h-[2px] bg-red-600" 
            />
            <motion.div 
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-6 h-[2px] bg-white origin-center" 
            />
          </button>
        </div>
      </nav>

      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-[150] lg:hidden"
          >
            <div className="flex flex-col h-full p-10 justify-between overflow-y-auto pt-32">
              
              
              <ul className="flex flex-col gap-6 relative z-[160]">
                {navLinks.map((link, i) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`text-4xl md:text-6xl font-sans font-black italic uppercase tracking-tighter block leading-none ${
                        pathname === link.path ? 'text-red-600' : 'text-white'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              
              <div className="mt-12 border-t border-white/10 pt-8 font-mono text-[10px] text-zinc-500 tracking-[0.3em] z-[160]">
                <div className="flex justify-between items-end">
                  <div className="space-y-1">
                    <p>LOCAL_TIME: {new Intl.DateTimeFormat('es-VE', { hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(new Date())}</p>
                    <p className="text-[8px] opacity-30 mt-4 tracking-normal font-sans italic">PRØYET_RED // DAVID MARTINEZ [cite: 2026-01-02]</p>
                  </div>
                  <p className="text-white/10 font-black text-6xl italic leading-none select-none">RED</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}