// src/components/Footer.jsx
import { FaWhatsapp, FaInstagram, FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900/80 text-gray-900 dark:text-white py-12 px-6">
      <div className="container mx-auto text-center">
        <h3 className="text-xl font-semibold mb-4">Contáctame</h3>
        <div className="flex justify-center gap-6 text-2xl">
          <a href="https://wa.link/u318kd" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
            <FaWhatsapp />
          </a>
          <a href="https://instagram.com/tuUsuario" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
            <FaInstagram />
          </a>
          <a href="https://github.com/rodneypereira97" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaGithub />
          </a>
          <a href="https://facebook.com/tuUsuario" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaFacebook />
          </a>
          <a href="https://linkedin.com/in/tuUsuario" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
            <FaLinkedin />
          </a>
        </div>
        <p className="text-sm mt-4 text-gray-400">© {new Date().getFullYear()} Ing. Rodney Pereira. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
