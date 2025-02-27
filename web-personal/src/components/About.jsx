import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-20 bg-fut-black" id="about">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl text-fut-gold text-center font-orbitron mb-12"
        >
          Sobre mí
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
              src="/yo.jpeg" // Reemplaza con tu foto en public
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
              Soy <span className="text-fut-gold">David Guevara</span>, un desarrollador web y diseñador UX/UI apasionado por crear experiencias digitales que combinen funcionalidad y estética. Mi trayectoria incluye proyectos como <span className="text-fut-gold">ID TECH</span>, donde desarrollé sistemas web complejos, y <span className="text-fut-gold">Noctua UCA</span>, una app móvil para estudiantes. Domino tecnologías como Vite, React, Node.js, Tailwind CSS, y Figma, siempre buscando soluciones innovadoras.
            </p>
            <p className="mb-6">
              Más allá del diseño web, he explorado otras áreas: fui <span className="text-fut-gold">analista BI junior</span> usando Power BI y Excel para analizar datos CSV, tengo interés en la <span className="text-fut-gold">ciberseguridad forense</span>, y trabajé como <span className="text-fut-gold">técnico en electrónica</span> gracias a mi formación técnica. Estas experiencias enriquecen mi enfoque multidisciplinario y mi capacidad para resolver problemas.
            </p>
            <p>
              En lo personal, soy un entusiasta del <span className="text-fut-gold">deporte</span> (natación, gimnasio, calistenia, taekwondo, basketball) y la <span className="text-fut-gold">música</span>. Toco guitarra, bajo, batería, piano y zampoña, y tengo experiencia en producción musical con mis propios instrumentos y equipo de grabación. Mi motivación es transformar ideas en realidades, ya sea a través de código, diseño o creatividad pura. ¡Conéctate conmigo para explorar posibilidades!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}