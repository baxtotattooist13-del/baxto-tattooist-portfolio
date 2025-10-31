import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-tattoo mb-4 md:mb-0"
          >
            BAXTO
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm"
          >
            © {currentYear} Baxto Tattooist. Todos los derechos reservados.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex space-x-6 mt-4 md:mt-0"
          >
            <a href="#" className="text-gray-500 hover:text-white transition-colors duration-300">
              Privacidad
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors duration-300">
              Términos
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
