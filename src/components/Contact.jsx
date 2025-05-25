function Contact() {
    return (
      <section id="contacto" className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white py-12 px-6">

        <h2 className="text-3xl font-semibold mb-4">Contacto</h2>
        <form className="max-w-xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Tu nombre"
              className="w-full sm:w-1/2 p-2 border border-gray-300 rounded-lg"
            />
            <input
              type="email"
              placeholder="Tu correo"
              className="w-full sm:w-1/2 p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <textarea
            placeholder="Tu mensaje"
            className="w-full mt-4 p-2 border border-gray-300 rounded-lg"
          ></textarea>
          <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg mt-4">
            Enviar mensaje
          </button>
        </form>
      </section>
    );
  }
  
  export default Contact;
  