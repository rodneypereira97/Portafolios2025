import { useState, useEffect } from "react";
import { Mail, CheckCircle, XCircle } from "lucide-react";

function Contact() {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/movdorop", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  // 🕒 Ocultar mensaje después de 3 segundos
  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 3000); // 3 segundos

      return () => clearTimeout(timer); // Limpiar si el componente se desmonta
    }
  }, [status]);

  return (
    <section
      id="contacto"
      className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white py-12 px-6"
    >
      <h2 className="text-3xl font-semibold text-center mb-4">Contacto</h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg"
      >
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <input
            type="text"
            name="nombre"
            placeholder="Tu nombre"
            required
            className="w-full sm:w-1/2 p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Tu correo"
            required
            className="w-full sm:w-1/2 p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>
        <textarea
          name="mensaje"
          placeholder="Tu mensaje"
          required
          className="w-full p-3 h-32 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition mb-4 resize-none"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300 flex justify-center items-center gap-2 disabled:opacity-50"
          disabled={status === "loading"}
        >
          <Mail className="w-5 h-5" />
          {status === "loading" ? "Enviando..." : "Enviar mensaje"}
        </button>

        {/* Mensajes de estado */}
        {status === "success" && (
          <p className="text-green-600 dark:text-green-400 mt-4 flex items-center gap-2">
            <CheckCircle size={20} /> ¡Mensaje enviado con éxito!
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600 dark:text-red-400 mt-4 flex items-center gap-2">
            <XCircle size={20} /> Hubo un error al enviar el mensaje. Inténtalo más tarde.
          </p>
        )}
      </form>
    </section>
  );
}

export default Contact;
