import CountUp from "react-countup";

function Stats() {
  return (
    <section className="bg-gray-100 dark:bg-gray-900/80 text-gray-900 dark:text-white py-12 px-6">
      <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8">
        <div>
          <h3 className="text-4xl font-bold text-blue-600">
            <CountUp end={3} duration={2} />+
          </h3>
          <p className="text-gray-600 mt-2">Años de experiencia</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-green-600">
            <CountUp end={25} duration={2} />+
          </h3>
          <p className="text-gray-600 mt-2">Proyectos</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-purple-600">
            <CountUp end={100} duration={2} />+
          </h3>
          <p className="text-gray-600 mt-2">Clientes felices</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-yellow-500">
            <CountUp end={10} duration={2} />+
          </h3>
          <p className="text-gray-600 mt-2">Tecnologías</p>
        </div>
      </div>
    </section>
  );
}

export default Stats;
