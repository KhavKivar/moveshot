import React from 'react';
import { motion } from 'motion/react';
import { Clapperboard, Users, Camera, Lightbulb } from 'lucide-react';

export default function About() {
  const traits = [
    {
      icon: <Clapperboard className="w-4 h-4 text-amber-400" />,
      title: 'Cineasta',
      description: 'Apasionado por el detrás de escena y la narrativa visual.'
    },
    {
      icon: <Users className="w-4 h-4 text-amber-400" />,
      title: 'Liderazgo',
      description: 'Presidente de la Asociación Chilena de Cine (ACC).'
    },
    {
      icon: <Camera className="w-4 h-4 text-amber-400" />,
      title: 'Enfoque',
      description: 'Técnica, intuición y pensamiento analítico al servicio de la historia.'
    },
    {
      icon: <Lightbulb className="w-4 h-4 text-amber-400" />,
      title: 'Filosofía',
      description: 'Optimizar recursos, pensar antes de filmar y desafiar límites.'
    }
  ];

  return (
    <section id="nosotros" className="py-24 md:py-32 bg-zinc-900 relative overflow-hidden border-b border-zinc-800">
      {/* Ambient glowing radial blur - subtle gray */}
      <div className="absolute top-1/3 -right-64 w-[600px] h-[600px] rounded-full bg-amber-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Story & Who is Jose Miguel */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="text-[10px] font-mono tracking-[0.3em] text-zinc-500 uppercase flex items-center gap-2 mb-2 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
              Detrás de la Lente
            </span>

            <h2 className="font-display font-black text-3xl sm:text-5xl text-amber-400 tracking-[0.1em] uppercase leading-none">
              JOSÉ MIGUEL MIÑO
            </h2>
            <p className="text-[11px] sm:text-xs font-mono tracking-[0.2em] text-zinc-500 uppercase">
              Director de Fotografía &amp; Presidente de la ACC
            </p>

            <p className="font-serif italic text-zinc-300 text-base sm:text-lg leading-relaxed mt-2">
              "La creatividad es la capacidad de resolver problemas con soluciones que no son evidentes" — <strong className="text-amber-400 font-semibold not-italic">José Miguel Miño</strong>.
            </p>

            <p className="text-zinc-300 text-sm leading-relaxed">
              <strong className="text-amber-400 font-semibold">Cineasta curicano</strong> egresado de la generación 2009–2015, formado en la transición del formato analógico al digital. Su trayectoria se ha construido bajo la premisa de "decir que sí a todo", dominando cada aspecto técnico y colaborativo en el set, lo que hoy lo posiciona como un referente en la industria audiovisual chilena y líder de la Asociación Chilena de Cine (ACC).
            </p>

            <p className="text-zinc-300 text-sm leading-relaxed">
              <strong className="text-amber-400 font-semibold">Para José Miguel</strong>, el lenguaje cinematográfico es un idioma estructurado que exige rigurosidad, técnica y un profundo respeto por sus reglas. Su enfoque profesional equilibra el ala técnica y la emotiva, guiado por una filosofía de aprendizaje continuo: decisiones audaces, seguidas de una reflexión metódica para pulir cada resultado.
            </p>

            <p className="text-zinc-400 text-xs sm:text-sm font-light tracking-wide leading-relaxed">
              <strong className="text-amber-400 font-semibold not-italic">Formado en la escasez de tiempo y recursos</strong>, heredó la práctica de "pensar antes de filmar", rescatando el valor y la magia detrás de cada imagen. Su identidad como realizador se define por optimizar recursos, abrazar la sutileza del lenguaje visual y desafiar constantemente las expectativas del espectador.
            </p>

            {/* Quick traits list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {traits.map((trait, idx) => (
                <div key={idx} className="p-4 rounded-sm border border-zinc-800 bg-zinc-950 flex gap-4 hover:border-amber-500/30 transition-all duration-300 shadow-sm">
                  <div className="p-2 sm:p-2.5 rounded-sm bg-zinc-800 border border-zinc-800 h-fit text-amber-400">
                    {trait.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xs text-amber-400 uppercase tracking-[0.12em] mb-1">
                      {trait.title}
                    </h4>
                    <p className="text-zinc-500 text-[11.5px] font-light leading-relaxed">
                      {trait.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Portrait Card & Quote */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* The Portrait Image with cinematic layout margins */}
            <motion.div
              initial={{ scale: 0.97, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-xl group border border-zinc-800"
            >
              <img
                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80"
                alt="José Miguel Miño en rodaje"
                className="w-full h-full object-cover transform scale-100 group-hover:scale-103 transition-transform duration-700 filter grayscale-[5%]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* Image labels */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div className="flex flex-col text-white">
                  <span className="text-[9px] font-mono text-zinc-300 uppercase tracking-widest font-bold">En Rodaje</span>
                  <span className="font-display font-medium text-xs uppercase tracking-wider mt-1">Detrás de Escenas (BTS)</span>
                </div>
                <span className="text-[9px] font-mono text-zinc-400 uppercase">Santiago, Chile</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
