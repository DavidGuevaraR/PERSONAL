import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaCheckCircle, FaTimesCircle, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({ from_name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        'service_8oi7707',
        'template_2a1khcc',
        formData,
        'GRah-QNJIlxyCyWBx'
      )
      .then(
        () => {
          setShowConfirmation('success');
          setFormData({ from_name: '', email: '', message: '' });
          setTimeout(() => {
            setShowConfirmation(null);
            setIsSending(false);
          }, 3000);
        },
        (error) => {
          setShowConfirmation('error');
          console.error('Error:', error);
          setTimeout(() => {
            setShowConfirmation(null);
            setIsSending(false);
          }, 3000);
        }
      );
  };

  return (
    <section className="py-20 bg-transparent" id="contact"> {/* Cambiado a bg-transparent */}
      <div className="max-w-2xl mx-auto px-4 relative z-10"> {/* z-10 ya estaba, lo mantenemos */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl text-fut-gold text-center font-orbitron mb-6"
        >
          Contacto
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-fut-offwhite text-center text-lg font-sans mb-12"
        >
          ¿Tienes una idea o proyecto en mente? Envíame un mensaje o conéctate conmigo en mis redes sociales.
        </motion.p>
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-6 relative z-20"
        >
          <div>
            <input
              type="text"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              placeholder="Nombre"
              required
              disabled={isSending}
              className="w-full p-4 bg-fut-gray border border-fut-gold/50 rounded-lg text-fut-offwhite focus:outline-none focus:border-fut-gold transition-colors disabled:opacity-50"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              disabled={isSending}
              className="w-full p-4 bg-fut-gray border border-fut-gold/50 rounded-lg text-fut-offwhite focus:outline-none focus:border-fut-gold transition-colors disabled:opacity-50"
            />
          </div>
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Mensaje"
              required
              rows="5"
              disabled={isSending}
              className="w-full p-4 bg-fut-gray border border-fut-gold/50 rounded-lg text-fut-offwhite focus:outline-none focus:border-fut-gold transition-colors disabled:opacity-50"
            />
          </div>
          <motion.button
            whileHover={{ scale: isSending ? 1 : 1.05, boxShadow: isSending ? 'none' : '0 0 15px rgba(255, 215, 0, 0.5)' }}
            whileTap={{ scale: isSending ? 1 : 0.95 }}
            type="submit"
            disabled={isSending}
            className="w-full p-4 bg-fut-gold text-fut-black rounded-full font-semibold disabled:bg-fut-gold/50 disabled:cursor-not-allowed"
          >
            {isSending ? 'Enviando...' : 'Enviar'}
          </motion.button>

          {/* Overlay de carga */}
          {isSending && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-fut-black/70 backdrop-blur-sm flex items-center justify-center z-30 rounded-xl"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                className="w-12 h-12 border-4 border-t-fut-gold border-l-fut-gold border-b-fut-gray border-r-fut-gray rounded-full"
              />
            </motion.div>
          )}
        </motion.form>

        {/* Redes sociales */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center gap-8 mt-12"
        >
          <motion.a
            href="https://www.instagram.com/tu-usuario" // Reemplaza con tu URL
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: '#FFD700' }}
            className="text-fut-offwhite hover:text-fut-gold transition-colors"
          >
            <FaInstagram size={32} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/tu-usuario" // Reemplaza con tu URL
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: '#FFD700' }}
            className="text-fut-offwhite hover:text-fut-gold transition-colors"
          >
            <FaLinkedin size={32} />
          </motion.a>
        </motion.div>

        {/* Modal de confirmación */}
        {showConfirmation && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-fut-black/70 backdrop-blur-md flex items-center justify-center z-50"
            onClick={() => setShowConfirmation(null)}
          >
            <motion.div
              className={`bg-fut-gray/90 p-8 rounded-xl border-2 ${showConfirmation === 'success' ? 'border-fut-gold' : 'border-red-500'} shadow-fut-gold/30 max-w-md w-full mx-4`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-center mb-4">
                {showConfirmation === 'success' ? (
                  <FaCheckCircle className="text-fut-gold text-4xl" />
                ) : (
                  <FaTimesCircle className="text-red-500 text-4xl" />
                )}
              </div>
              <p className={`text-center text-lg font-sans ${showConfirmation === 'success' ? 'text-fut-gold' : 'text-red-500'}`}>
                {showConfirmation === 'success' ? '¡Mensaje enviado con éxito!' : 'Error al enviar el mensaje. Intenta de nuevo.'}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowConfirmation(null)}
                className="mt-6 mx-auto block px-6 py-2 bg-fut-gold text-fut-black rounded-full font-semibold"
              >
                Cerrar
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}