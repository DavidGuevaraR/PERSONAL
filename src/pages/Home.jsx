import { motion } from 'framer-motion';
import { useCallback } from 'react';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Contact from '../components/Contact';

export default function Home() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesConfig = {
    particles: {
      number: { value: 100, density: { enable: true, value_area: 800 } },
      color: { value: '#FFD700', animation: { enable: true, speed: 20, sync: false } },
      shape: { type: ['circle', 'triangle'] },
      opacity: { value: 0.6, random: true },
      size: { value: 4, random: true, anim: { enable: true, speed: 2, size_min: 0.5 } },
      move: {
        enable: true,
        speed: 3,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'bounce',
        orbit: { enable: true, distance: 200, speed: 1, rotation: { value: 45, random: false } },
      },
      line_linked: { enable: true, distance: 120, color: '#FFD700', opacity: 0.5, width: 1.5 },
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: { enable: true, mode: 'bubble' },
        onclick: { enable: true, mode: 'repulse' },
      },
      modes: {
        bubble: { distance: 250, size: 6, duration: 2, opacity: 0.8 },
        repulse: { distance: 400, duration: 0.4 },
      },
    },
    retina_detect: true,
  };

  return (
    <div className="bg-fut-black text-fut-offwhite relative min-h-screen overflow-x-hidden">
      {/* Partículas globales */}
      <Particles
        className="absolute inset-0"
        style={{ zIndex: 0 }} // Detrás de todo el contenido
        init={particlesInit}
        options={particlesConfig}
      />
      <div className="relative z-10"> {/* Contenido encima de las partículas */}
        <Hero />
        <Portfolio />
        <About />
        <Contact />
      </div>
    </div>
  );
}