import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import { useCallback } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Inicio', to: '#hero' },
    { name: 'Portafolio', to: '#portfolio' },
    { name: 'Sobre mí', to: '#about' },
    { name: 'Contacto', to: '#contact' },
  ];

  const handleScroll = (target) => {
    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesConfig = {
    particles: {
      number: { value: 50, density: { enable: true, value_area: 800 } },
      color: { value: '#FFD700' },
      shape: { type: 'circle' },
      opacity: { value: 0.3, random: true },
      size: { value: 2, random: true },
      move: { enable: true, speed: 1, direction: 'none', random: true, out_mode: 'out' },
    },
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 w-full bg-fut-black/80 backdrop-blur-md py-4 z-50"
    >
      {/* Barra superior */}
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between">
        <div className="text-fut-gold font-orbitron text-xl">DG</div>

        <div className="md:hidden">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="text-fut-gold focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </motion.button>
        </div>

        <ul className="hidden md:flex justify-center gap-12 text-fut-gold font-semibold w-full">
          {menuItems.map((item) => (
            <motion.li
              key={item.name}
              whileHover={{ scale: 1.1, color: '#FFF' }}
              transition={{ duration: 0.3 }}
              className="cursor-pointer hover:underline hover:underline-offset-8"
            >
              <button onClick={() => handleScroll(item.to)} className="focus:outline-none">
                {item.name}
              </button>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Menú hamburguesa mejorado para móvil */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="md:hidden bg-fut-black/70 backdrop-blur-lg absolute top-0 right-0 w-3/4 h-screen z-40 border-l-2 border-fut-gold/30 shadow-fut-gold/40" // Fondo semitransparente
          >
            <div className="relative z-10 flex flex-col items-center justify-center h-full py-8 space-y-8">
              {menuItems.map((item) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3, delay: 0.1 * menuItems.indexOf(item) }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full text-center"
                >
                  <button
                    onClick={() => handleScroll(item.to)}
                    className="text-fut-gold text-2xl font-semibold hover:text-fut-offwhite transition-colors px-8 py-4 rounded-lg hover:bg-fut-gold/20 border border-fut-gold/20 focus:outline-none"
                  >
                    {item.name}
                  </button>
                </motion.div>
              ))}
            </div>
            {/* Botón de cierre estilizado */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 bg-fut-black/80 rounded-full p-2 border border-fut-gold/50 text-fut-gold hover:text-fut-offwhite z-20"
            >
              <FaTimes size={24} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}