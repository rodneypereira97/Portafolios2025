import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useScrollDirection } from "../hooks/useScrollDirection";


function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Aplicar clase al body
  useEffect(() => {
    const body = document.documentElement;
    darkMode ? body.classList.add("dark") : body.classList.remove("dark");
  }, [darkMode]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);
  const scrollDirection = useScrollDirection();


  return (
    
    <motion.header
      className="bg-blue-600/80 dark:bg-gray-900/80 backdrop-blur-sm text-white py-4 px-6 fixed w-full top-0 left-0 z-50 shadow-md transition-colors"
      initial={{ y: 0 }}
      animate={{ y: scrollDirection === "down" ? -100 : 0 }}
      transition={{ duration: 0.4 }}
    >

      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-wide">
          Ing. Rodney Pereira
        </h1>

        {/* Menú Desktop */}
        <ul className="hidden sm:flex space-x-6 text-lg">
          <li><a href="#about" className="hover:text-yellow-300 transition-transform hover:scale-110">Sobre mí</a></li>
          <li><a href="#projects" className="hover:text-yellow-300 transition-transform hover:scale-110">Proyectos</a></li>
          <li><a href="#contacto" className="hover:text-yellow-300 transition-transform hover:scale-110">Contacto</a></li>
        </ul>

        {/* Botones */}
        <div className="flex items-center gap-4 sm:hidden">
          <button onClick={toggleDarkMode}>
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Botón dark/light para escritorio */}
        <div className="hidden sm:block">
          <button onClick={toggleDarkMode} className="hover:text-yellow-300">
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>
      </nav>

      {/* Menú Móvil desplegable */}
      {isOpen && (
        <motion.ul
          className="sm:hidden flex flex-col items-center bg-blue-700 dark:bg-gray-800 py-4 space-y-4 mt-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <li><a href="#about" onClick={toggleMenu} className="hover:text-yellow-300">Sobre mí</a></li>
          <li><a href="#projects" onClick={toggleMenu} className="hover:text-yellow-300">Proyectos</a></li>
          <li><a href="#contacto" onClick={toggleMenu} className="hover:text-yellow-300">Contacto</a></li>
        </motion.ul>
      )}
    </motion.header>
  );
}

export default Header;
