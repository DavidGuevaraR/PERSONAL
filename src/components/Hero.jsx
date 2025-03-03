import { motion } from 'framer-motion';
import { useCallback, useEffect, useRef } from 'react';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'; // Importamos el OBJLoader

export default function Hero() {
  const canvasRef = useRef(null);

  // Inicialización de partículas
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

  // Configuración de Three.js con modelo 3D
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Cargar el modelo .obj
    const loader = new OBJLoader();
    loader.load(
      '/cabeza.obj', // Ruta al archivo en la carpeta public
      (object) => {
        object.traverse((child) => {
          if (child.isMesh) {
            child.material = new THREE.MeshBasicMaterial({
              color: 0xFFD700, // Dorado
              wireframe: true, // Estilo geométrico futurista
            });
          }
        });
        // Escalar y posicionar el modelo (ajusta según el tamaño del .obj)
        object.scale.set(2, 2, 2); // Ajusta el tamaño si es necesario
        object.position.set(0, 0, 0);
        scene.add(object);

        // Animación
        const animate = () => {
          requestAnimationFrame(animate);
          object.rotation.x += 0.003; // Giro lento
          object.rotation.y += 0.003;
          renderer.render(scene, camera);
        };
        animate();
      },
      (xhr) => console.log((xhr.loaded / xhr.total) * 100 + '% loaded'), // Progreso
      (error) => console.log('Error loading model:', error) // Manejo de errores
    );

    // Configuración de la cámara
    camera.position.z = 15;

    // Ajustar tamaño al redimensionar ventana
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-fut-black relative overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0" style={{ zIndex: 1 }} />
      <Particles
        className="absolute inset-0"
        style={{ zIndex: 2 }}
        init={particlesInit}
        options={particlesConfig}
      />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="text-center z-10 relative"
        style={{ zIndex: 3 }}
      >
        <h1 className="text-6xl md:text-8xl font-bold text-fut-gold font-orbitron">
          David Guevara
        </h1>
        <p className="text-xl md:text-2xl text-fut-offwhite mt-4">
          Desarrollador Web | Visionario Digital
        </p>
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(255, 215, 0, 0.5)' }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-8 py-3 bg-fut-gold text-fut-black rounded-full font-semibold"
        >
          Explora mi trabajo
        </motion.button>
      </motion.div>
    </section>
  );
}