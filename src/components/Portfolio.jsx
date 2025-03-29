import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaTimes, FaFigma, FaGithub } from 'react-icons/fa';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fullScreenImage, setFullScreenImage] = useState(null);

  const projects = [
    {
      title: 'ID TECH',
      shortDesc: 'Sistema web para emisión de DTE en El Salvador con integración al Ministerio de Hacienda.',
      fullDesc: 'ID TECH es un innovador sistema web desarrollado para la emisión de Documentos Tributarios Electrónicos (DTE) en El Salvador, cumpliendo con las normativas fiscales vigentes. Esta plataforma está diseñada para emitir los 11 documentos tributarios oficiales, y cuenta con una estructura de cuatro roles de usuarios, destacándose uno con las máximas atribuciones y permisos. El sistema se comunica de manera segura y eficiente con el Ministerio de Hacienda mediante su API oficial. Mi función principal fue desarrollar de manera integral el frontend del sistema, incluyendo la creación y cálculo exacto de los documentos tributarios. Entre las funcionalidades desarrolladas se encuentran: Gestión de Inventarios, Gestión de Clientes, Administración de DTE Generados, y Gestión de Usuarios.',
      tech: 'Vite, React, Node.js, Tailwind CSS',
      images: ['/idtech.jpeg', '/idtech2.png'],
      links: [
        { name: 'Figma', url: 'https://www.figma.com/your-link', icon: <FaFigma /> },
        { name: 'GitHub', url: 'https://github.com/your-repo', icon: <FaGithub /> },
      ],
    },
    {
      title: 'Gestión de Inventario en Bodegas',
      shortDesc: 'Sistema web para controlar inventarios en bodegas de materiales de construcción en Nevada, EE.UU.',
      fullDesc: 'Desarrollé un sistema web para gestionar de manera eficiente el inventario de productos en bodegas de una empresa de material de construcción ubicada en Nevada, Estados Unidos. Este sistema permite registrar y controlar la entrada y salida de productos en las bodegas, optimizando la gestión de inventarios y asegurando la disponibilidad de materiales necesarios. Características clave: Registro de Productos, Control de Entrada y Salida, Informes y Análisis, y Gestión de Usuarios. Aunque estoy autorizado a mencionar la naturaleza del sistema, debo mantener la confidencialidad de los detalles específicos, como su nombre, enlaces e imágenes, debido a una cláusula de privacidad firmada con la empresa.',
      tech: 'Vite, React, Node.js, Tailwind CSS',
      images: ['/inventario.png'],
      links: [{ name: 'GitHub', url: 'https://github.com/your-repo', icon: <FaGithub /> }],
    },
    {
      title: 'Sistema Web de Lista de Tareas',
      shortDesc: 'Aplicación web para gestionar tareas con tres roles de usuario.',
      fullDesc: 'Desarrollé una página web diseñada para la creación y gestión de listas de tareas, optimizada para mejorar la productividad y organización de sus usuarios. Este sistema cuenta con una estructura de tres roles distintos, uno de los cuales posee las atribuciones máximas dentro de la plataforma. Características clave: Creación y Gestión de Tareas, Roles de Usuario, y Visualización Intuitiva.',
      tech: 'Vite, React, Node.js, Tailwind CSS',
      images: ['/todolist.png', '/todolist2.png'],
      links: [{ name: 'Figma', url: 'https://www.figma.com/your-link', icon: <FaFigma /> }],
    },
    {
      title: 'Rediseño de E-Commerce Car Connect',
      shortDesc: 'Rediseño UX/UI y desarrollo frontend de la página de inicio de Car Connect.',
      fullDesc: 'Participé en el rediseño del sitio web de ventas de automóviles, Car Connect. El sitio original, aunque funcional, contaba con una interfaz rústica y un diseño UX deficiente tanto para los clientes como para los administradores. En este proyecto, desempeñé el rol de Dev-Designer. Como Diseñador UX/UI: Realicé el nuevo diseño de la página utilizando Figma, abarcando todas las posibles vistas, incluyendo errores, acciones y las interfaces correspondientes a sus tres roles existentes. Como Desarrollador Frontend: Desarrollé la página de inicio (home page) del sitio Car Connect, asegurando una experiencia de usuario optimizada y visualmente atractiva. El resto de la interfaz fue implementado por el equipo de desarrolladores.',
      tech: 'Vite, React, Node.js, Tailwind CSS, Figma',
      images: ['/car4.png', '/car.png', '/car2.png', '/car3.png'],
      links: [
        { name: 'Figma', url: 'https://www.figma.com/your-link', icon: <FaFigma /> },
        { name: 'GitHub', url: 'https://github.com/your-repo', icon: <FaGithub /> },
      ],
    },
    {
      title: 'Noctua UCA',
      shortDesc: 'App móvil Android para acompañamiento estudiantil.',
      fullDesc: 'Aplicación móvil para Android orientada al acompañamiento estudiantil. Esta app permite la creación de un perfil estudiantil donde se pueden agregar datos relevantes como el nivel de carrera, las materias a cursar, y la carrera del estudiante. Su objetivo principal es conectar a estudiantes con intereses y datos afines, facilitando así la comunicación entre ellos. Mi rol en este proyecto fue de Dev-Designer. Como Diseñador UX/UI: Creación de la interfaz gráfica de la aplicación utilizando Figma, asegurando una experiencia de usuario intuitiva y atractiva. Como Desarrollador Frontend: Implementación de la interfaz gráfica de la aplicación utilizando Android Studio y Jetpack Compose, garantizando una experiencia fluida y coherente.',
      tech: 'Android Studio, Jetpack Compose, Figma',
      images: ['/noctua.png', '/noctua2.png', '/noctua3.png'],
      links: [{ name: 'Figma', url: 'https://www.figma.com/your-link', icon: <FaFigma /> }],
    },
    {
      title: 'Diseño de Sitio Web ACEUCA',
      shortDesc: 'Diseño UX/UI para la gestión de préstamos de empleados de la UCA.',
      fullDesc: 'Participé en el diseño del sitio web de la Asociación Cooperativa de Ahorro, Crédito y Consumo de Empleados de la Universidad Centroamericana José Simeón Cañas de R.L. (ACEUCA). Este sitio web está destinado a gestionar los préstamos para los empleados de la Universidad UCA, optimizando y facilitando el proceso. Mi rol como Diseñador UX/UI incluyó: Diseño integral de la interfaz gráfica utilizando Figma, abarcando todas las vistas necesarias para una experiencia de usuario intuitiva y eficiente. Colaboración estrecha con el equipo de desarrolladores para asegurar que el diseño se implementara de manera precisa y funcional.',
      tech: 'Figma',
      images: ['/cuca.png', '/cuca2.png'],
      links: [{ name: 'Figma', url: 'https://www.figma.com/your-link', icon: <FaFigma /> }],
    },
    {
      title: 'ORDINO',
      shortDesc: 'Sistema web para gestión médica de clínicas privadas.',
      fullDesc: 'Sistema web para gestionar clínicas, este sistema contiene gestión de pacientes, historial médico y gestión de usuarios del sistema, tiene 3 roles. Mi papel en este proyecto fue de Dev-Designer. Como Diseñador UX/UI: Creación de la interfaz gráfica de usuario en Figma de todas las vistas del sistema tanto para pantallas grandes como para pantallas móviles. Como Desarrollador Frontend: Creación de la interfaz gráfica del sistema.',
      tech: 'Vite, React, Node.js, Tailwind CSS, Figma',
      images: ['/ordino.png', '/ordino2.png', '/ordino3.png'],
      links: [
        { name: 'Figma', url: 'https://www.figma.com/your-link', icon: <FaFigma /> },
        { name: 'GitHub', url: 'https://github.com/your-repo', icon: <FaGithub /> },
      ],
    },
  ];

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
      if (fullScreenImage) {
        setFullScreenImage(selectedProject.images[(currentImageIndex + 1) % selectedProject.images.length]);
      }
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
      if (fullScreenImage) {
        setFullScreenImage(selectedProject.images[currentImageIndex === 0 ? selectedProject.images.length - 1 : currentImageIndex - 1]);
      }
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="py-20 bg-transparent"
      id="portfolio"
    >
      <h2 className="text-4xl text-fut-gold text-center font-orbitron mb-12">Portafolio</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 relative z-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-b from-fut-gray to-fut-black/90 p-6 rounded-xl shadow-lg border border-fut-gold/40 hover:shadow-fut-gold/80 hover:scale-110 transition-all duration-300 cursor-pointer relative z-10"
            onClick={() => {
              setSelectedProject(project);
              setCurrentImageIndex(0);
            }}
          >
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg border border-fut-gold/20 mb-4"
            />
            <h3 className="text-fut-gold text-2xl font-semibold mb-2 hover:text-fut-offwhite transition-colors">
              {project.title}
            </h3>
            <p className="text-fut-offwhite mb-4">{project.shortDesc}</p>
            <p className="text-fut-gold text-sm italic flex items-center">
              {project.tech} <span className="ml-2 text-xs opacity-70">Ver más →</span>
            </p>
          </motion.div>
        ))}
      </div>

      {/* Modal de proyecto */}
      <AnimatePresence>
        {selectedProject && !fullScreenImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-fut-black/70 backdrop-blur-md flex items-center justify-center z-50"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ y: '100vh', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100vh', opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="bg-fut-gray/90 p-8 rounded-xl max-w-3xl w-full mx-4 border-2 border-fut-gold/60 shadow-lg shadow-fut-gold/30 overflow-y-auto max-h-[90vh] z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-fut-gold text-3xl font-orbitron bg-gradient-to-r from-fut-gold to-fut-offwhite bg-clip-text text-transparent">
                  {selectedProject.title}
                </h3>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-fut-gold hover:text-fut-offwhite"
                  onClick={() => setSelectedProject(null)}
                >
                  <FaTimes size={24} />
                </motion.button>
              </div>

              <div className="relative mb-6">
                <img
                  src={selectedProject.images[currentImageIndex]}
                  alt={`${selectedProject.title} ${currentImageIndex + 1}`}
                  className="w-full h-72 object-cover rounded-lg cursor-pointer"
                  onClick={() => setFullScreenImage(selectedProject.images[currentImageIndex])}
                />
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-fut-gold/80 p-2 rounded-full text-fut-black hover:bg-fut-gold transition-colors z-60"
                  onClick={prevImage}
                >
                  <FaArrowLeft />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-fut-gold/80 p-2 rounded-full text-fut-black hover:bg-fut-gold transition-colors z-60"
                  onClick={nextImage}
                >
                  <FaArrowRight />
                </motion.button>
                <div className="text-center text-fut-offwhite mt-2">
                  {currentImageIndex + 1} / {selectedProject.images.length}
                </div>
              </div>

              <p className="text-fut-offwhite text-lg leading-relaxed mb-6 font-sans">
                {selectedProject.fullDesc}
              </p>
              <p className="text-fut-gold text-sm italic mb-4">{selectedProject.tech}</p>

              <div className="flex gap-4">
                {selectedProject.links.map((link, idx) => (
                  <motion.a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="text-fut-gold hover:text-fut-offwhite flex items-center gap-2"
                  >
                    {link.icon} <span>{link.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal de imagen en pantalla completa */}
      <AnimatePresence>
        {fullScreenImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-fut-black/90 flex items-center justify-center z-[9999]"
            onClick={() => setFullScreenImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.4 }}
              className="relative max-w-[90vw] max-h-[90vh] z-[10000]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={fullScreenImage}
                alt="Full screen project image"
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
              <motion.button
                whileHover={{ scale: 1.2 }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-fut-gold/80 p-2 rounded-full text-fut-black hover:bg-fut-gold transition-colors z-[10010]"
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
              >
                <FaArrowLeft />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.2 }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-fut-gold/80 p-2 rounded-full text-fut-black hover:bg-fut-gold transition-colors z-[10010]"
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
              >
                <FaArrowRight />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-4 right-4 text-fut-gold hover:text-fut-offwhite z-[10010]"
                onClick={() => setFullScreenImage(null)}
              >
                <FaTimes size={32} />
              </motion.button>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-fut-offwhite text-center z-[10010]">
                {currentImageIndex + 1} / {selectedProject.images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
} 