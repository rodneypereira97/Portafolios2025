import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaPhp, FaLaravel, FaNodeJs, FaBootstrap } from "react-icons/fa";

const skills = [
  { icon: <FaHtml5 />, name: "HTML5", color: "text-orange-500" },
  { icon: <FaCss3Alt />, name: "CSS3", color: "text-blue-500" },
  { icon: <FaJs />, name: "JavaScript", color: "text-yellow-500" },
  { icon: <FaReact />, name: "React", color: "text-cyan-500" },
  { icon: <FaPhp />, name: "PHP", color: "text-indigo-600" },
  { icon: <FaLaravel />, name: "Laravel", color: "text-red-600" },
  { icon: <FaNodeJs />, name: "Nodejs", color: "text-green-600" },
  { icon: <FaBootstrap />, name: "Bootstrap", color: "text-purple-600" },
  
];

function Skills() {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Habilidades</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition transform hover:-translate-y-1"
          >
            <div className={`text-4xl mb-2 ${skill.color}`}>{skill.icon}</div>
            <h3 className="text-lg font-semibold text-gray-700">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
