
import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <section className="bg-secondary py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Ponte en Contacto</h2>
          <p className="text-gray-700 mb-8">
            ¿Tienes alguna pregunta o sugerencia? Nos encantaría saber de ti.
          </p>
        </div>
        <form className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <label htmlFor="name" className="block text-primary font-medium mb-2">Nombre</label>
            <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-secondary rounded-md focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-shadow" placeholder="Tu nombre" />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-primary font-medium mb-2">Correo Electrónico</label>
            <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-secondary rounded-md focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-shadow" placeholder="tu@email.com" />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-primary font-medium mb-2">Mensaje</label>
            <textarea id="message" name="message" rows={5} className="w-full px-4 py-2 border border-secondary rounded-md focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-shadow" placeholder="Escribe tu mensaje aquí..."></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="bg-accent hover:bg-opacity-90 text-white font-bold py-3 px-12 rounded-full text-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
              Enviar Mensaje
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
