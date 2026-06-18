import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Instagram } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // height of navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { title: 'Inicio', id: 'inicio' },
    { title: 'Portafolio', id: 'portafolio' },
    { title: 'Nosotros', id: 'nosotros' },
    { title: 'Contacto', id: 'contacto' }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 py-4 bg-white border-b border-zinc-200"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" onClick={(e) => handleNavClick(e, 'inicio')} className="cursor-pointer">
            <Logo size="sm" withText={true} theme="light" />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, idx) => (
              <a
                key={`${link.id}-${idx}`}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors duration-200"
              >
                {link.title}
              </a>
            ))}
          </div>

          {/* Action Buttons - Solid Black Button just like Zane */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href="https://www.instagram.com/josemiraw.mino/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-zinc-500 hover:text-zinc-950 hover:bg-zinc-100 transition-colors"
              title="Instagram"
            >
              <Instagram className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <a
              href="#contacto"
              onClick={(e) => handleNavClick(e, 'contacto')}
              className="px-5 py-2.5 rounded-full bg-zinc-950 text-white hover:bg-zinc-800 text-sm font-medium transition-all duration-300 flex items-center gap-1.5 shadow-sm"
            >
              Cotizar proyecto
              <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <a
              href="https://www.instagram.com/josemiraw.mino/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-full text-zinc-500 hover:text-zinc-950 hover:bg-zinc-100 transition-colors"
            >
              <Instagram className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 transition-colors focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" strokeWidth={1.5} /> : <Menu className="w-5 h-5" strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[64px] z-[45] md:hidden bg-white border-b border-zinc-200 py-8 px-6 shadow-lg flex flex-col gap-6"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link, idx) => (
                <a
                  key={`mob-${link.id}-${idx}`}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className="text-base font-medium text-zinc-700 hover:text-zinc-950 py-3 border-b border-zinc-100"
                >
                  {link.title}
                </a>
              ))}
            </div>

            <a
              href="#contacto"
              onClick={(e) => handleNavClick(e, 'contacto')}
              className="w-full text-center px-6 py-3.5 rounded-full bg-zinc-950 text-white font-medium hover:bg-zinc-800 transition-all duration-300"
            >
              Cotizar proyecto
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
