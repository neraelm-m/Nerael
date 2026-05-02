'use client';

export default function Footer() {
  return (
    <footer className="relative z-50 w-full bg-black border-t border-white/10 py-20 px-6 md:px-20 font-mono mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* COLUMNA 1: IDENTIDAD DE MARCA */}
          <div className="space-y-4">
            <h3 className="text-white font-black italic text-xl tracking-tighter uppercase">
              PRØYET<span className="text-red-600">_</span>RED
            </h3>
            <p className="text-zinc-500 text-[10px] leading-relaxed max-w-[250px] uppercase">
              Estudio de desarrollo de software y branding estratégico. 
              Especializado en activos visuales de alto rendimiento.
            </p>
          </div>

          {/* COLUMNA 2: CONTACTO (WHATSAPP) */}
          <div className="space-y-4">
            <h4 className="text-zinc-700 text-[10px] font-black uppercase tracking-[0.3em]">Direct_Communication</h4>
            <div className="flex flex-col gap-3">
              <a 
                href="https://wa.me/584122791704?text=SISTEMA_RECEPTOR%3A%20Hola%20Nerael%2C%20vengo%20de%20tu%20portafolio%20PR%C3%98YET_RED." 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-emerald-500 transition-all text-xs flex items-center gap-2 group border border-white/5 p-3 bg-zinc-950/50 w-fit"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                ESTABLECER_CONEXIÓN_WHATSAPP
              </a>
              <p className="text-zinc-600 text-[9px] italic uppercase tracking-widest">RECEPTOR_ACTIVO: LUNES - VIERNES</p>
            </div>
          </div>

          {/* COLUMNA 3: DATOS DE LOCALIZACIÓN (MARACAIBO) */}
          <div className="space-y-4">
            <h4 className="text-zinc-700 text-[10px] font-black uppercase tracking-[0.3em]">System_Location</h4>
            <div className="text-zinc-400 text-xs space-y-1 uppercase">
              <p className="font-bold text-white">MARACAIBO, VENEZUELA</p>
              <p className="text-zinc-600 text-[10px]">COORD: 10.6445° N, 71.6408° W</p>
              <p className="text-zinc-600 text-[10px]">NODE_ID: LATAM_SRV_01</p>
            </div>
          </div>
        </div>

        {/* BARRA INFERIOR: LEGAL Y CRÉDITOS */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="text-[9px] text-zinc-700 tracking-widest uppercase">
            <p>© {new Date().getFullYear()} PRØYET_RED. Todos los derechos reservados.</p>
            <p className="mt-1 text-zinc-800">Diseñado y codificado por NERAEL</p>
          </div>
          
          <div className="flex items-center gap-4 opacity-20">
            <div className="h-[1px] w-8 bg-zinc-800"></div>
            <span className="text-[8px] text-zinc-500 font-black tracking-[0.5em]">SYSTEM_VERSION_2026.4</span>
            <div className="h-[1px] w-8 bg-zinc-800"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}