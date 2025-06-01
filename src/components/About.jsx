// Pega aquí el componente "About" mejorado con framer-motion y la imagen
// También puedes incluir el botón para descargar el CV dentro del mismo componente

import { motion } from "framer-motion";

function About() {
  return (
<section id="about" className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white pt-24 pb-12 px-6">

      <div className="max-w-6xl mx-auto flex flex-col-reverse sm:flex-row items-center justify-between gap-10">
        {/* Texto */}
        <motion.div
          className="flex-1 text-center sm:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4 dark:text-white">Sobre mí</h2>

          <p className="text-lg text-gray-600 leading-relaxed">
               Soy un desarrollador web apasionado por crear soluciones creativas e interactivas. Domino tecnologías como <span className="font-semibold text-blue-600 dark:text-blue-400">React</span>, <span className="font-semibold text-yellow-600 dark:text-yellow-400">JavaScript</span>, <span className="font-semibold text-blue-700 dark:text-blue-300">AJAX</span>, <span className="font-semibold text-purple-700 dark:text-purple-300">PHP</span> y <span className="font-semibold text-green-700 dark:text-green-300">MySQL</span>. También trabajo con frameworks modernos como <span className="font-semibold text-red-600 dark:text-red-400">Laravel</span> y <span className="font-semibold text-green-600 dark:text-green-400">Node.js</span> para crear aplicaciones robustas y escalables.
          </p>
          <a
            href="/RodneyCV.pdf"
            download
            className="inline-block mt-6 bg-blue-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-700 transition"
          >
            Descargar CV
          </a>
        </motion.div>

        {/* Imagen */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative group w-56 h-72 sm:w-56 sm:h-72 rounded-full overflow-hidden shadow-2xl ring-4 ring-blue-500/30 transition-transform hover:scale-105">
            <img
              src={`${import.meta.env.BASE_URL}rodney2.jpeg`}
              alt="Rodney"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition duration-300" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
