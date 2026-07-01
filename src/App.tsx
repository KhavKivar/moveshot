import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-white text-zinc-900 overflow-x-hidden antialiased selection:bg-black selection:text-white">
      {/* Global Navigation Header */}
      <Navbar />

      {/* Immersive Hero Section */}
      <Hero />

      {/* Rich Interactive Portafolio Grid */}
      <Portfolio />

      {/* About the Director Jose Mira */}
      <About />

      {/* Booking and Contact Form */}
      <Contact />

      {/* Modern Footer Coordinates */}
      <Footer />
    </div>
  );
}
