'use client';

import { motion } from "framer-motion";
const Motion = motion as unknown as any;
import TechBackground from "@/components/TechBackground";
import { 
  SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiHtml5, SiJavascript,
  SiNodedotjs, SiPhp, SiPython, SiMysql, SiExpress,
  SiAstro, SiDocker, SiOpencv, SiPytorch,
  SiGit, SiGithub, SiFigma,
  SiDjango, SiFlask, SiRuby
} from "react-icons/si";
import { IconType } from 'react-icons';

// --- COMPONENTES AUXILIARES ---

function TechCard({ title, color, children }: { title: string; color?: string; children: React.ReactNode }) {
  return (
    <section className="p-8 border border-white/5 rounded-2xl bg-zinc-900/40 backdrop-blur-sm hover:border-red-600/30 transition-all group text-left">
      <h4 className={`mb-6 font-sans font-black italic uppercase text-2xl tracking-tighter ${color ?? 'text-white'}`}>
        {title}
      </h4>
      <div className="flex flex-wrap gap-3">
        {children}
      </div>
    </section>
  );
}

function TechBadge({ name, icon: Icon }: { name: string; icon?: IconType }) {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[11px] font-mono text-zinc-400 group-hover:text-white group-hover:border-white/20 transition-all cursor-default">
      {Icon && (
        <span className="text-sm transition-colors group-hover:text-red-500">
          <Icon />
        </span>
      )}
      <span>{name}</span>
    </div>
  );
}

function ProjectCard({ title, description, tags, image, link }: { 
  title: string, description: string, tags: string[], image: string, link: string 
}) {
  return (
    <Motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-zinc-900/40 border border-white/5 rounded-2xl overflow-hidden hover:border-red-600/50 transition-all duration-500"
    >
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-red-600/20 group-hover:bg-transparent z-10 transition-all duration-500"></div>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 z-20 transition-opacity duration-300">
          <a href={link} className="px-6 py-3 bg-white text-black font-mono text-[10px] font-black uppercase tracking-widest shadow-2xl">
            Lanzar_Módulo
          </a>
        </div>
      </div>

      <div className="p-8 space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="text-2xl font-sans font-black italic uppercase tracking-tighter text-white group-hover:text-red-500 transition-colors">
            {title}
          </h3>
        </div>
        
        <p className="text-zinc-400 text-sm font-light leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map(tag => (
            <span key={tag} className="text-[9px] font-mono text-zinc-500 uppercase border border-white/10 px-2 py-0.5 rounded">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </Motion.div>
  );
}

// --- COMPONENTE PRINCIPAL ---

export default function Home() {
  const SHOW_FEATURED = false;
  return (
    <main className="relative min-h-screen bg-black overflow-x-hidden selection:bg-red-600">
      
      <TechBackground opacity={0.20} imagePath="/assets/images/wallpaper4.png" />

      <div className="relative z-10 flex flex-col items-center p-6 pt-16 pb-32 text-white">
        
      
        <Motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-8 flex items-center gap-2 px-4 py-1.5 border border-emerald-500/20 bg-emerald-500/5 rounded-full backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[10px] text-emerald-500 font-mono tracking-[0.3em] uppercase font-bold">Disponible para proyectos</span>
        </motion.div>

        
        <div className="relative w-full max-w-5xl flex flex-col items-center text-center">
          <Motion.div 
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "auto", opacity: 0.7 }}
            className="flex items-center gap-3 mb-4 overflow-hidden whitespace-nowrap"
          >
            <div className="h-[1px] w-12 bg-red-600"></div>
            <h2 className="text-red-500 font-mono text-[10px] tracking-[0.5em] uppercase font-bold">
              SYSTEM_OPERATOR // 2026
            </h2>
            <div className="h-[1px] w-12 bg-red-600"></div>
          </Motion.div>

          <Motion.div 
            className="relative inline-block"
            animate={{ textShadow: ["0px 0px 0px rgba(255,0,0,0)", "2px 0px 0px rgba(255,0,0,0.8)", "-2px 0px 0px rgba(0,255,255,0.8)", "0px 0px 0px rgba(255,0,0,0)"] }}
            transition={{ repeat: Infinity, duration: 0.15, repeatDelay: 4 }}
          >
            <h1 className="text-6xl md:text-[130px] font-sans font-black italic tracking-tighter uppercase leading-[0.8] text-white">
              David<br />
              <span className="relative inline-block">
                Martinez
                  <Motion.span
                    data-text="NERAEL"
                    initial={{ scale: 0, y: 8 }}
                    animate={{ scale: 1, y: 0 }}
                    transition={{ delay: 0.8, type: 'spring' }}
                    className="glitch absolute -bottom-2 -right-2 md:-right-12 bg-red-600 text-black font-mono text-[10px] md:text-xl px-3 py-1 font-black not-italic tracking-[0.14em] md:tracking-[0.22em] whitespace-nowrap shadow-[4px_4px_0px_rgba(0,0,0,1)] z-20"
                  >
                    NERAEL
                  </Motion.span>
              </span>
            </h1>
          </Motion.div>

          <p className="mt-8 text-zinc-400 text-lg md:text-2xl font-light max-w-2xl">
            Técnico en Desarrollo de Software especializado en <span className="text-white font-bold italic underline decoration-red-600 decoration-2 underline-offset-4">branding estratégico</span> para <span className="text-red-500 font-mono font-black italic">PRØYET_RED</span>.
          </p>
        </div>

        
        <Motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative w-full max-w-5xl mt-24 mb-16 px-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center text-left">
            <div className="md:col-span-4 flex justify-center">
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-white/10 bg-zinc-900 group">
                <img src="/assets/images/perfil.jpg" alt="David Martinez" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
            </div>
            <div className="md:col-span-8 space-y-6">
              <h3 className="text-4xl md:text-5xl font-sans font-black italic uppercase text-white">Sobre <span className="text-red-500">Mí</span></h3>
              <p className="text-zinc-400 text-lg font-light leading-relaxed">
                Con casi tres años en el sector tecnológico, me he especializado en cerrar la brecha entre el código complejo y el diseño de alto impacto. Mi trayectoria como Técnico en Desarrollo de Software no se limita a escribir líneas funcionales; se trata de construir ecosistemas digitales escalables y visualmente potentes.

                En los últimos dos años, he profundizado en el campo de la visión artificial, utilizando frameworks como OpenCV y PyTorch para implementar modelos de detección de objetos y segmentación en tiempo real. Esta mentalidad analítica la traslado al desarrollo web moderno, donde domino el stack de Next.js, TypeScript y Tailwind CSS para crear interfaces que se sienten como el futuro.

                Bajo el nodo <span className="text-red-500 font-bold italic">PRØYET_RED</span>, opero con una visión clara: el software debe ser una pieza de ingeniería impecable y, al mismo tiempo, una herramienta de branding estratégico que posicione marcas en la vanguardia digital. Mi enfoque une la lógica pura con el impacto visual estratégico.
              </p>
              <a
                href="/api/download-cv"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-mono text-xs font-black uppercase tracking-widest overflow-hidden transition-all rounded-full hover:pr-12"
                rel="noopener noreferrer"
              >
                <span className="absolute inset-0 bg-red-600 translate-y-[102%] group-hover:translate-y-0 transition-transform"></span>
                <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors">
                   Descargar CV
                </span>
              </a>
            </div>
          </div>
        </Motion.div>

        
        <div className={`w-full max-w-5xl mt-32 px-4 ${SHOW_FEATURED ? '' : 'hidden'}`} aria-hidden={!SHOW_FEATURED}>
          <div className="flex flex-col items-center mb-16 space-y-2">
            <h2 className="text-5xl md:text-6xl font-sans font-black italic uppercase tracking-tighter">
              Proyectos <span className="text-red-600">Destacados</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard 
              title="Nero Narrative AI"
              description="Arquitectura de narrativa procedimental para el universo Project Red, utilizando modelos de lenguaje para generar biografía de personajes."
              tags={['Python', 'PyTorch', 'Next.js']}
              image="/assets/images/project1.jpg"
              link="#"
            />
            <ProjectCard 
              title="Red Market Core"
              description="Arquitectura Marketplace de alto rendimiento optimizada para activos digitales con Next.js y pasarelas de pago automatizadas."
              tags={['Next.js', 'PostgreSQL', 'Stripe']}
              image="/assets/images/project2.jpg"
              link="#"
            />
          </div>

          <div className="mt-12 text-center">
            <a href="/proyectos" className="text-zinc-500 font-mono text-[10px] tracking-[0.3em] uppercase hover:text-white transition-colors border-b border-white/10 pb-1">
              Ver todos los archivos_
            </a>
          </div>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mt-12">
          <TechCard title="Frontend" color="text-cyan-400">
            <TechBadge name="Next.js" icon={SiNextdotjs} />
            <TechBadge name="React" icon={SiReact} />
            <TechBadge name="TypeScript" icon={SiTypescript} />
            <TechBadge name="Tailwind" icon={SiTailwindcss} />
            <TechBadge name="HTML5" icon={SiHtml5} />
            <TechBadge name="JS" icon={SiJavascript} />
          </TechCard>

          <TechCard title="Backend" color="text-white">
            <TechBadge name="Node.js" icon={SiNodedotjs} />
            <TechBadge name="Python" icon={SiPython} />
            <TechBadge name="MySQL" icon={SiMysql} />
            <TechBadge name="PHP" icon={SiPhp} />
            <TechBadge name="C#" />
            <TechBadge name="Express" icon={SiExpress} />
            <TechBadge name="Django" icon={SiDjango} />
            <TechBadge name="Flask" icon={SiFlask} />
            <TechBadge name="Ruby" icon={SiRuby} />
          </TechCard>

          <TechCard title="Aprendiendo" color="text-orange-500">
            <TechBadge name="Astro" icon={SiAstro} />
            <TechBadge name="Docker" icon={SiDocker} />
            <TechBadge name="OpenCV" icon={SiOpencv} />
            <TechBadge name="PyTorch" icon={SiPytorch} />
          </TechCard>

          <TechCard title="Herramientas" color="text-blue-500">
            <TechBadge name="Git" icon={SiGit} />
            <TechBadge name="GitHub" icon={SiGithub} />
            <TechBadge name="VS Code" />
            <TechBadge name="Figma" icon={SiFigma} />
          </TechCard>
        </div>

      </div>
    </main>
  );
}