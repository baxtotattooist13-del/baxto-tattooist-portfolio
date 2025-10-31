import { motion } from 'framer-motion';

const Contact = () => {
  // Nota: Se ha simplificado el componente para usar la acción POST directa de Formspree.
  // El envío se hará a la dirección de correo del usuario.
  // Formspree requiere una confirmación por correo la primera vez que se usa.

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'baxto.tattooist@gmail.com',
      link: 'mailto:baxto.tattooist@gmail.com',
    },
    {
      icon: '📱',
      title: 'WhatsApp',
      value: '+52 984 256 2365',
      link: 'https://wa.me/529842562365',
    },
    {
      icon: '📍',
      title: 'Ubicación',
      value: 'Playa del Carmen, MX',
      link: '#',
    },
    {
      icon: '🕐',
      title: 'Horario',
      value: 'Lun - Sáb: 10:00 - 20:00',
      link: '#',
    },
  ];

  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Contacto
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6">¿Listo para tu próximo tatuaje?</h3>
            <p className="text-gray-400 mb-8">
              Estoy aquí para hacer realidad tus ideas. Contáctame para agendar una consulta 
              y discutir tu proyecto personalizado.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <span className="text-3xl">{info.icon}</span>
                  <div>
                    <p className="text-sm text-gray-500">{info.title}</p>
                    <p className="font-semibold">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <p className="text-gray-400 mb-4">Sígueme en redes sociales:</p>
              <div className="flex space-x-4">
                {['Instagram', 'Facebook'].map((social) => (
                  <motion.a
                    key={social}
                    href={social === 'Instagram' ? 'https://www.instagram.com/baxto.tattooist' : 'https://www.facebook.com/share/1XfLswuVQP/'}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                  >
                    {social === 'Instagram' ? 'IG' : 'FB'}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
	          <motion.div
	            initial={{ opacity: 0, x: 50 }}
	            whileInView={{ opacity: 1, x: 0 }}
	            viewport={{ once: true }}
	            transition={{ duration: 0.8 }}
	          >
	            <form 
	              action="https://formspree.io/f/mrgwzppz" 
	              method="POST" 
	              className="space-y-6"
	            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
	                  name="Nombre"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-white transition-colors duration-300 text-white"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
	                  name="Email"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-white transition-colors duration-300 text-white"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
	                  name="Teléfono"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-white transition-colors duration-300 text-white"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
	                  name="Mensaje"
                  required
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-white transition-colors duration-300 text-white resize-none"
                ></textarea>
              </div>

	                <motion.button
	                type="submit"
	                whileHover={{ scale: 1.02 }}
	                whileTap={{ scale: 0.98 }}
	                className="w-full btn-primary"
	              >
	                Enviar Mensaje
	              </motion.button>
	              <input type="hidden" name="_subject" value="Nueva Solicitud de Tatuaje desde el Portafolio" />
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
