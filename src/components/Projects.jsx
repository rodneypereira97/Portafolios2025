import { FaReact, FaHtml5, FaCss3Alt, FaPhp, FaLaravel, FaNodeJs } from "react-icons/fa";
import { SiMysql, SiJavascript } from "react-icons/si";

function Projects() {
  const projects = [
    {
      title: "Proyecto Carrusel",
      description: "Es un carrusel de menús interactivo y responsivo.",
      link: "https://rodneypereira97.github.io/carrusel/",
      image: `${import.meta.env.BASE_URL}carrusel.png`,
      tech: [
      <FaHtml5 className="text-orange-600"/>,
      <FaCss3Alt />, 
      <SiJavascript className="text-yellow-500"/>],
    },
    {
      title: "App para una Barberia",
      description: "Sistema web con Login, gestión y calendarios de citas.",
      link: "https://app-barberia-production-4196.up.railway.app/citas",
      image: `${import.meta.env.BASE_URL}calendario.png`,
      tech: [<FaLaravel />, <SiMysql />, <FaPhp />],
    },
    {
      title: "Sistema Integral de Ventas y Gestión de Clientes con Reportes",
      description: "Una plataforma de Gestión de Ventas, Stock y Reportes Personalizados para Comercios",
      link: "https://ventas-app-production.up.railway.app/",
      image: `${import.meta.env.BASE_URL}sistema_ventas.png`,
      tech: [<FaReact />, <FaNodeJs />, <SiMysql />],
    },
  ];

  return (
    <section id="projects" className="py-16 px-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Mis Proyectos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex space-x-3 text-2xl flex items-center justify-center h-16 mb-4">
                {project.tech.map((Icon, i) => (
                  <span key={i} className="text-blue-500 dark:text-blue-300">{Icon}</span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-blue-600 dark:text-blue-400 hover:underline hover:text-green-400 transition"
                >
                  Ver más →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
