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
    <section id="contacto" className="py-24 md:py-32 bg-zinc-50 relative border-b border-zinc-200">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-display font-semibold text-3xl sm:text-5xl text-zinc-950 tracking-tight leading-none">
          ¿Tienes un proyecto?<br className="hidden sm:block" /> Hablemos.
        </h2>

        <p className="text-zinc-500 text-sm leading-relaxed mt-4">
          Síguenos o escríbenos directo, lo que prefieras.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mt-10">
          {instagramAccounts.map((acc) => (
            <a
              key={acc.handle}
              href={acc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 border border-zinc-200 rounded-2xl bg-white hover:border-zinc-300 hover:shadow-sm transition-all duration-300 group"
            >
              <div className="p-2.5 rounded-full bg-zinc-100 text-zinc-950 group-hover:bg-zinc-950 group-hover:text-white transition-colors">
                <Instagram className="w-4 h-4" strokeWidth={1.5} />
              </div>
              <span className="text-sm font-medium text-zinc-900">{acc.handle}</span>
            </a>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-10">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-zinc-950 text-white hover:bg-zinc-800 text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
          >
            <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
            WhatsApp
            <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white border border-zinc-200 text-zinc-950 hover:bg-zinc-50 hover:border-zinc-300 text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Mail className="w-4 h-4" strokeWidth={1.5} />
            {EMAIL}
          </a>
        </div>
      </div>
    </section>
  );
}
