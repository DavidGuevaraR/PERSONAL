import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { useCallback, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { useLanguage } from '../i18n/LanguageContext';

export default function Hero() {
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);
  const buttonControls = useAnimation();
  const sectionControls = useAnimation();
  const { scrollY } = useScroll();
  const { t } = useLanguage();

  // Controlar visibilidad de Hero según scroll
  const opacity = useTransform(scrollY, [0, 300], [1, 0]); // Desvanecer al bajar inicialmente
  const y = useTransform(scrollY, [0, 300], [0, -100]); // Subir al bajar inicialmente

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const loader = new OBJLoader();
    loader.load(
      '/cabeza.obj',
      (object) => {
        object.traverse((child) => {
          if (child.isMesh) {
            child.material = new THREE.MeshBasicMaterial({
              color: 0xFFD700,
              wireframe: true,
            });
          }
        });
        object.scale.set(2, 2, 2);
        object.position.set(0, 0, 0);
        scene.add(object);

        const animate = () => {
          requestAnimationFrame(animate);
          object.rotation.x += 0.003;
          object.rotation.y += 0.003;
          renderer.render(scene, camera);
        };
        animate();
      },
      (xhr) => console.log((xhr.loaded / xhr.total) * 100 + '% loaded'),
      (error) => console.log('Error loading model:', error)
    );

    camera.position.z = 15;

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleExploreClick = async () => {
    // Animación arcade del botón
    await buttonControls.start({
      opacity: [1, 0.5, 1, 0.5, 1],
      transition: { duration: 0.5, times: [0, 0.2, 0.4, 0.6, 0.8] },
    });

    // Animación de salida de Hero
    await sectionControls.start({
      opacity: 0,
      y: -100,
      transition: { duration: 0.6, ease: 'easeIn' },
    });

    // Desplazamiento a Portfolio
    document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Revertir animación si el usuario sube al inicio
  useEffect(() => {
    const unsubscribe = scrollY.onChange((value) => {
      if (value <= 50) { // Si está cerca del tope (ajusta el valor según prefieras)
        sectionControls.start({
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: 'easeOut' },
        });
      }
    });
    return () => unsubscribe();
  }, [scrollY, sectionControls]);

  return (
    <motion.section
      ref={sectionRef}
      animate={sectionControls}
      initial={{ opacity: 1, y: 0 }} // Estado inicial visible
      className="min-h-screen flex items-center justify-center bg-transparent relative overflow-hidden"
      id="hero"
    >
      <canvas ref={canvasRef} className="absolute inset-0" style={{ zIndex: 1 }} />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="text-center z-10 relative"
        style={{ zIndex: 2 }}
      >
        <h1 className="text-6xl md:text-8xl font-bold text-fut-gold font-orbitron">
          David Guevara
        </h1>
        <p className="text-xl md:text-2xl text-fut-offwhite mt-4">
          {t.hero.subtitle}
        </p>
        <motion.button
          animate={buttonControls}
          whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(255, 215, 0, 0.5)' }}
          whileTap={{ scale: 0.95 }}
          onClick={handleExploreClick}
          className="mt-8 px-8 py-3 bg-fut-gold text-fut-black rounded-full font-semibold text-lg shadow-lg hover:shadow-fut-gold/70 transition-shadow"
        >
          {t.hero.cta}
        </motion.button>
      </motion.div>
    </motion.section>
  );
}
