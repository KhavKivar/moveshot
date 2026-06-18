import React from 'react';
import { Mail, Instagram, MessageCircle, ArrowUpRight } from 'lucide-react';

const WHATSAPP_NUMBER = '56900000000'; // TODO: reemplazar con el número real
const EMAIL = 'contacto@moveshot.cl'; // TODO: reemplazar con el email real

const instagramAccounts = [
  { handle: '@moveshot', url: 'https://www.instagram.com/moveshot/' },
  { handle: '@m_rentalhouse', url: 'https://www.instagram.com/m_rentalhouse/' },
  { handle: '@manuelasph', url: 'https://www.instagram.com/manuelasph/' }
];

export default function Contact() {
  return (
    <section id="contacto" className="py-24 md:py-32 bg-zinc-950 relative border-b border-zinc-800">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <span className="text-[10px] font-mono tracking-[0.3em] text-zinc-500 uppercase flex items-center justify-center gap-2 mb-4 font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
          Agendar Rodaje
        </span>

        <h2 className="font-display font-black text-3xl sm:text-5xl text-amber-400 tracking-[0.1em] uppercase leading-none">
          ¿Tienes un proyecto?<br className="hidden sm:block" /> Hablemos.
        </h2>

        <p className="text-zinc-400 font-light text-xs sm:text-sm leading-relaxed tracking-wider uppercase mt-6 opacity-85">
          Síguenos o escríbenos directo, lo que prefieras.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mt-10">
          {instagramAccounts.map((acc) => (
            <a
              key={acc.handle}
              href={acc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 border border-zinc-800 rounded-sm bg-zinc-900 hover:border-amber-500 hover:bg-zinc-950 transition-all duration-300 group"
            >
              <div className="p-2.5 rounded-sm bg-zinc-950 border border-zinc-800 text-amber-400 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                <Instagram className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-zinc-50 font-mono">{acc.handle}</span>
            </a>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-amber-500 text-zinc-950 hover:bg-amber-400 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-zinc-700 text-amber-400 hover:bg-zinc-900 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Mail className="w-4 h-4" />
            {EMAIL}
          </a>
        </div>
      </div>
    </section>
  );
}
