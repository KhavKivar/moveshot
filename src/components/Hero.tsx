import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, ArrowUpRight, X, ArrowRight, Star } from 'lucide-react';
import heroReel from '../assets/videos/hero-reel.mp4';
import logoCorona from '../assets/logos/corona.png';
import logoCcu from '../assets/logos/ccu.png';
import logoRipley from '../assets/logos/ripley.png';
import logoFantasilandia from '../assets/logos/fantasilandia.png';
import logoMallplaza from '../assets/logos/mallplaza.svg';
import logoSantander from '../assets/logos/santander.svg';

const INSTAGRAM_REEL_URL = 'https://www.instagram.com/p/DEgd9sNuo8T/';

export default function Hero() {
  const [reelOpen, setReelOpen] = useState(false);

  const handleScroll = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const clientLogos = [
    { name: 'Corona', tag: '@cerveza_corona', dir: 'Christian Copaja', logoUrl: logoCorona },
    {
      name: 'Arcor Chile',
      tag: '@arcor_chile',
      dir: 'Nico Maynetto',
      customLogo: (
        <span className="font-display font-black text-base tracking-tight text-red-600 uppercase">Arcor</span>
      )
    },
    { name: 'CCU', tag: '@ccu', dir: 'Christian Copaja', logoUrl: logoCcu },
    {
      name: 'Uno AFP',
      tag: '@unoafp',
      dir: 'Nay Jimenez',
      customLogo: (
        <div className="flex items-center justify-center font-bold text-zinc-900">
          <span className="text-base tracking-tighter uppercase mr-1">AFP</span>
          <span className="text-base lowercase font-black text-amber-500">uno</span>
        </div>
      )
    },
    {
      name: 'Metro de Santiago',
      tag: '@metrodesantiago',
      dir: 'Stanley Films',
      customLogo: (
        <div className="flex items-center gap-1.5 text-red-600">
          <div className="w-5 h-5 rounded-full border-2 border-current flex items-center justify-center font-black text-[10px]">M</div>
          <span className="font-display font-black text-xs tracking-widest uppercase text-zinc-900">Metro</span>
        </div>
      )
    },
    {
      name: 'WeareMakakoo',
      tag: 'Makakoo',
      dir: 'Manuela Sph',
      customLogo: (
        <span className="font-mono text-xs font-black tracking-[0.2em] text-zinc-950 uppercase border-y border-zinc-900 py-1 px-2.5">
          MAKAKOO
        </span>
      )
    },
    {
      name: 'Probiplus',
      tag: '@probiplus',
      dir: 'Stanley Films',
      customLogo: (
        <div className="flex items-center gap-1.5 text-zinc-900">
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2.5">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="font-display font-black text-xs tracking-widest text-zinc-900">PROBIPLUS</span>
        </div>
      )
    },
    { name: 'Ripley Chile', tag: '@ripleychile', dir: 'Boald Group', logoUrl: logoRipley },
    { name: 'Fantasilandia', tag: '@fantasilandia.oficial', dir: 'Stanley Films (2nd Unit)', logoUrl: logoFantasilandia },
    {
      name: 'Chocapic',
      tag: '@chocapicchile',
      dir: 'Nico Maynetto',
      customLogo: (
        <span className="font-display font-black text-sm tracking-tight text-amber-700 uppercase">Chocapic</span>
      )
    },
    {
      name: 'Farmacias Ahumada',
      tag: '@ahumada',
      dir: 'Nico Maynetto',
      customLogo: (
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-full bg-[#0d5ca4] flex items-center justify-center text-white text-[10px] font-bold">+</div>
          <span className="font-sans font-black text-[#0d5ca4] text-xs">ahumada</span>
        </div>
      )
    },
    { name: 'Mallplaza', tag: '@mallplazacl', dir: 'Noli Provoste', logoUrl: logoMallplaza },
    { name: 'Santander', tag: '@santanderchile', dir: 'Goya Ziegele', logoUrl: logoSantander }
  ];

  return (
    <section id="inicio" className="relative bg-white">
      {/* WIDE CINEMATIC BANNER — moving reel as background */}
      <div className="relative w-full h-[58vh] min-h-[420px] max-h-[640px] flex flex-col overflow-hidden bg-black">
        <video
          src={heroReel}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/75" />

        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6">
          <h1 className="font-display font-black text-2xl sm:text-4xl md:text-5xl text-white tracking-[0.03em] uppercase leading-[1.05] max-w-4xl">
            Imágenes que no<br />se quedan quietas.
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <button
              onClick={() => handleScroll('contacto')}
              className="w-full sm:w-auto px-8 py-4 bg-white text-black hover:bg-zinc-200 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-2"
            >
              Cotizar Proyecto
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setReelOpen(true)}
              className="w-full sm:w-auto px-8 py-4 bg-white/10 border border-white/30 text-white hover:bg-white/20 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              Ver Reel
            </button>
          </div>
        </div>
      </div>

      {/* TRUSTED CLIENTS / CREDITS SECTION */}
      <div className="border-b border-zinc-200 py-12 bg-zinc-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center space-y-2 mb-8">
            <div className="flex justify-center items-center gap-1 text-amber-500">
              <Star className="w-4 h-4 fill-amber-500" />
              <Star className="w-4 h-4 fill-amber-500" />
              <Star className="w-4 h-4 fill-amber-500" />
              <Star className="w-4 h-4 fill-amber-500" />
              <Star className="w-4 h-4 fill-amber-500" />
            </div>
            <p className="text-xs font-bold tracking-[0.22em] text-zinc-900 uppercase">
              Marcas que han confiado en nuestro trabajo
            </p>
          </div>

          <div className="logo-marquee-mask overflow-hidden">
            <div className="logo-marquee-track flex w-max gap-5 py-2">
              {[...clientLogos, ...clientLogos].map((client, idx) => (
                <div
                  key={idx}
                  className="flex-none w-[160px] h-[100px] flex items-center justify-center p-6 border-2 border-zinc-100 bg-white rounded-lg hover:-translate-y-1 hover:shadow-lg hover:border-amber-300 transition-all duration-300"
                >
                  {client.logoUrl ? (
                    <img
                      src={client.logoUrl}
                      alt={`${client.name} logo`}
                      className="max-h-full max-w-[85%] object-contain"
                    />
                  ) : (
                    client.customLogo
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* REEL LIGHTBOX */}
      <AnimatePresence>
        {reelOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-md"
            onClick={() => setReelOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.97, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.97, y: 15 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative w-full max-w-3xl rounded-sm overflow-hidden bg-black border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setReelOpen(false)}
                className="absolute top-3 right-3 z-50 p-2 rounded-sm bg-black/80 text-white hover:text-white/85 transition-all border border-white/15 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <video
                src={heroReel}
                className="w-full max-h-[80vh] bg-black"
                controls
                autoPlay
                playsInline
              />

              <div className="p-4 bg-zinc-950 border-t border-white/5 flex items-center justify-between gap-3 text-white">
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">MoveShot Realizadores</span>
                <a
                  href={INSTAGRAM_REEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-mono uppercase tracking-widest text-white flex items-center gap-1 hover:text-zinc-300"
                >
                  Ver en Instagram
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
