import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  const renderParts = (parts) =>
    parts.map((part, index) =>
      part.highlight ? (
        <span key={index} className="text-fut-gold">
          {part.text}
        </span>
      ) : (
        <span key={index}>{part.text}</span>
      )
    );

  return (
    <section className="py-20 bg-transparent" id="about"> {/* Cambiado a bg-transparent */}
      <div className="max-w-5xl mx-auto px-4 relative z-10"> {/* Añadido z-10 */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl text-fut-gold text-center font-orbitron mb-12"
        >
          {t.about.title}
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Fotografía */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <img
              src="/yo.jpeg" // Asegúrate de que esta imagen esté en public
              alt="David Guevara"
              className="w-64 h-64 object-cover rounded-full border-4 border-fut-gold/60 shadow-fut-gold/50"
            />
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-fut-offwhite text-lg leading-relaxed font-sans"
          >
            <p className="mb-6">
              {renderParts(t.about.paragraph1)}
            </p>
            <p className="mb-6">
              {renderParts(t.about.paragraph2)}
            </p>
            <p>
              {renderParts(t.about.paragraph3)}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
