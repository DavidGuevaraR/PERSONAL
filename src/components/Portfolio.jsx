import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaTimes, FaFigma, FaLink } from 'react-icons/fa';
import { useLanguage } from '../i18n/LanguageContext';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fullScreenImage, setFullScreenImage] = useState(null);
  const { t } = useLanguage();

  const projectMeta = [
    {
      id: 'dashboard',
      images: ['/dash1.png', '/dash2.jpeg'],
      links: [],
    },
    {
      id: 'sales',
      images: ['/Adv1.png', '/Adv2.png', '/Adv3.png', '/Adv4.png'],
      links: [
        {
          name: 'Figma',
          url: 'https://www.figma.com/design/YKQnfWoaV4xI1jq5BU6afA/Sistemas-de-ventas-con-facturaci%C3%B3n-electr%C3%B3nica.?node-id=192-2308&t=eQNuE4KrwbqV2ci8-1',
          icon: <FaFigma />,
        },
      ],
    },
    { id: 'idtech', images: ['/idtech.png', '/idtech2.png'], links: [] },
    { id: 'inventory', images: ['/inventario.png'], links: [] },
    {
      id: 'marketplace',
      images: ['/mk1.png', '/mk2.png', '/mk3.png'],
      links: [
        {
          name: 'Figma',
          url: 'https://www.figma.com/design/pWIveUZJhTIACWQQsj4wPG/MarketPlace-UCA?node-id=72-2&t=Wue3x27DVjDN0XVp-1',
          icon: <FaFigma />,
        },
        { name: 'Landing Page', url: 'https://marketplace-uca.vercel.app/', icon: <FaLink /> },
      ],
    },
    {
      id: 'carconnect',
      images: ['/car4.png', '/car.png', '/car2.png', '/car3.png'],
      links: [
        {
          name: 'Figma',
          url: 'https://www.figma.com/design/JUfvCtXKwkI5oMn24InYRr/E-Commerce-2.0?m=auto&t=t15u2x0egpeZruIy-1',
          icon: <FaFigma />,
        },
      ],
    },
    {
      id: 'noctua',
      images: ['/noctua.png', '/noctua2.png', '/noctua3.png'],
      links: [
        {
          name: 'Figma',
          url: 'https://www.figma.com/design/0tox0tVxwUW1XTaB6uC8qC/Noctua-UCA-UI?m=auto&t=t15u2x0egpeZruIy-1',
          icon: <FaFigma />,
        },
      ],
    },
    {
      id: 'aceuca',
      images: ['/cuca.png', '/cuca2.png'],
      links: [
        {
          name: 'Figma',
          url: 'https://www.figma.com/design/HUpEd3UrDnuUH1g6ppo4m8/Prestamos-ACEUCA?m=auto&t=t15u2x0egpeZruIy-1',
          icon: <FaFigma />,
        },
      ],
    },
    { id: 'todo', images: ['/todolist.png', '/todolist2.png'], links: [] },
    {
      id: 'ordino',
      images: ['/ordino.png', '/ordino2.png', '/ordino3.png'],
      links: [
        {
          name: 'Figma',
          url: 'https://www.figma.com/design/RuM0YJIEcCLXceycux78Dn/Ordino-UI?m=auto&t=t15u2x0egpeZruIy-1',
          icon: <FaFigma />,
        },
      ],
    },
  ];

  const projects = projectMeta.map((project) => ({
    ...project,
    ...t.portfolio.projects[project.id],
  }));

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
      <h2 className="text-4xl text-fut-gold text-center font-orbitron mb-12">{t.portfolio.title}</h2>
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
              {project.tech} <span className="ml-2 text-xs opacity-70">{t.portfolio.viewMore}</span>
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
              className="bg-fut-gray/90 p-8 rounded-xl max-w-3xl w-full mx-4 border-2 border-fut-gold/60 shadow-lg shadow-fut-gold/30 overflow-y-auto z-50 mt-20 md:mt-0 max-h-[calc(100vh-5rem)] md:max-h-[90vh]"
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
                alt={t.portfolio.fullscreenAlt}
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
