import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Instagram } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        className={`fixed top-0 left-0 right-0 z-50 py-5 transition-colors duration-300 ${
          scrolled
            ? 'bg-zinc-950 border-b border-zinc-800/80 shadow-md'
            : 'bg-zinc-950/90 backdrop-blur-sm border-b border-zinc-900'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" onClick={(e) => handleNavClick(e, 'inicio')} className="cursor-pointer">
            <Logo size="sm" withText={true} theme="dark" />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, idx) => (
              <a
                key={`${link.id}-${idx}`}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="text-xs font-bold tracking-[0.15em] text-zinc-50 hover:text-zinc-500 transition-colors duration-200 uppercase"
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
              className="p-2 text-zinc-400 hover:text-amber-400 transition-colors"
              title="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#contacto"
              onClick={(e) => handleNavClick(e, 'contacto')}
              className="px-6 py-3 bg-amber-500 border border-amber-500 text-zinc-950 hover:bg-amber-400 hover:border-amber-400 text-xs font-bold tracking-[0.18em] uppercase transition-all duration-300 flex items-center gap-1.5"
            >
              COTIZAR PROYECTO
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <a
              href="https://www.instagram.com/josemiraw.mino/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-zinc-400 hover:text-amber-400 transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-700 hover:text-amber-400 transition-colors focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
            className="fixed inset-x-0 top-[70px] z-[45] md:hidden bg-zinc-950 border-b border-zinc-800 py-8 px-6 shadow-xl flex flex-col gap-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link, idx) => (
                <a
                  key={`mob-${link.id}-${idx}`}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className="text-sm font-bold text-zinc-50 hover:text-zinc-400 uppercase tracking-[0.15em] py-2 border-b border-zinc-900"
                >
                  {link.title}
                </a>
              ))}
            </div>
            
            <a
              href="#contacto"
              onClick={(e) => handleNavClick(e, 'contacto')}
              className="w-full text-center px-6 py-3.5 bg-amber-500 text-zinc-950 font-bold tracking-[0.15em] uppercase hover:bg-amber-400 transition-all duration-300"
            >
              COTIZAR PROYECTO
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
