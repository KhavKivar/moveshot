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
    <section id="contacto" className="py-24 md:py-32 bg-white relative border-b border-zinc-200">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-display font-black text-3xl sm:text-5xl text-black tracking-[0.1em] uppercase leading-none">
          ¿Tienes un proyecto?<br className="hidden sm:block" /> Hablemos.
        </h2>

        <p className="text-zinc-600 font-light text-xs sm:text-sm leading-relaxed tracking-wider uppercase mt-6 opacity-85">
          Síguenos o escríbenos directo, lo que prefieras.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mt-10">
          {instagramAccounts.map((acc) => (
            <a
              key={acc.handle}
              href={acc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 border border-zinc-200 rounded-sm bg-zinc-50 hover:border-black hover:bg-white transition-all duration-300 group"
            >
              <div className="p-2.5 rounded-sm bg-white border border-zinc-200 text-black group-hover:bg-black group-hover:text-white transition-colors">
                <Instagram className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-zinc-900 font-mono">{acc.handle}</span>
            </a>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-black text-white hover:bg-zinc-800 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-zinc-300 text-black hover:bg-zinc-50 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Mail className="w-4 h-4" />
            {EMAIL}
          </a>
        </div>
      </div>
    </section>
  );
}
