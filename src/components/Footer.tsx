import React from 'react';
import { Instagram, ArrowUp, Film, Mail, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 bg-zinc-900 border-t border-zinc-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main top footer layout */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-zinc-800">
          {/* Logo with description */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Logo size="sm" withText={true} theme="dark" />
            <p className="text-zinc-500 text-xs font-light tracking-widest uppercase leading-loose max-w-sm mt-4 opacity-80">
              Productora boutique especializada en la captura cinemática de alta velocidad, deportes de riesgo extremo, comerciales y narrativas dinámicas.
            </p>
          </div>

          {/* Social and quick coordinates */}
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
            <div className="flex flex-col text-center sm:text-left gap-1.5 text-mono">
              <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-[0.2em] font-bold">Contacto Directo</span>
              <a href="mailto:contacto@moveshot.cl" className="text-xs font-mono text-zinc-50 hover:text-amber-400 transition-all">
                contacto@moveshot.cl
              </a>
            </div>

            <div className="flex flex-col text-center sm:text-left gap-1.5 text-mono">
              <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-[0.2em] font-bold">Redes Sociales</span>
              <a 
                href="https://www.instagram.com/josemiraw.mino/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs text-zinc-50 hover:text-amber-400 transition-all flex items-center justify-center sm:justify-start gap-1 font-mono"
              >
                @josemiraw.mino
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-sm bg-zinc-950 border border-zinc-800 text-zinc-500 hover:text-amber-400 hover:border-amber-500 transition-all cursor-pointer shadow-sm"
            title="Volver Arriba"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom footer bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[9px] font-mono text-zinc-500 uppercase tracking-[0.2em] text-center sm:text-left">
          <div>
            &copy; {currentYear} MOVESHOT CINEMATOGRAFÍA. TODOS LOS DERECHOS RESERVADOS.
          </div>
          <div className="flex items-center gap-1.5">
            <Film className="w-3.5 h-3.5 text-zinc-400" />
            DISEÑADO PARA JOSE MIRA | REALIZADOR AUDIOVISUAL
          </div>
        </div>

      </div>
    </footer>
  );
}
