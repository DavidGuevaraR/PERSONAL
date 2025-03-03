import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 w-full bg-fut-black/80 backdrop-blur-md py-4 z-50"
    >
      <ul className="flex justify-center gap-12 text-fut-gold font-semibold">
        {[
          { name: 'Inicio', to: '#hero' },
          { name: 'Portafolio', to: '#portfolio' },
          { name: 'Sobre mí', to: '#about' },
          { name: 'Contacto', to: '#contact' },
        ].map((item) => (
          <motion.li
            key={item.name}
            whileHover={{ scale: 1.1, color: '#FFF' }}
            transition={{ duration: 0.3 }}
            className="cursor-pointer hover:underline hover:underline-offset-8"
          >
            <Link to={`/${item.to}`} onClick={(e) => {
              e.preventDefault();
              document.querySelector(item.to)?.scrollIntoView({ behavior: 'smooth' });
            }}>
              {item.name}
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}