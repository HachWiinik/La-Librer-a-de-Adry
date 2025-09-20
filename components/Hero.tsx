import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-center text-white">
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <img 
        src="https://res.cloudinary.com/dy08afhuz/image/upload/v1758339823/Generated_Image_September_19_2025_-_9_53PM_1_swspln.png" 
        alt="A cozy library with warm lighting" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-20 container mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 drop-shadow-lg">Descubre tu Próxima Aventura</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 drop-shadow-md">
          Explora un universo de historias que esperan ser leídas. Encuentra clásicos, novedades y tesoros escondidos.
        </p>
        <a 
          href="#" 
          className="bg-accent hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
        >
          Explorar Colección
        </a>
      </div>
    </section>
  );
};

export default Hero;