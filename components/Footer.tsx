import React from 'react';
import { FacebookIcon, TwitterIcon, InstagramIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-light pt-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <img src="https://res.cloudinary.com/dy08afhuz/image/upload/v1758339823/grok-image-8722a0bf-0ed9-4b4b-8f98-53d5cf0a3a79_ojwimh.png" alt="La Librería de Adry Logo" className="w-10 h-10" />
              <span className="text-2xl font-serif font-bold">La Librería de Adry</span>
            </a>
            <p className="text-sm text-gray-400">Tu refugio literario en la web.</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Explorar</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-accent transition-colors">Novedades</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Más Vendidos</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Géneros</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Autores</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Nosotros</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-accent transition-colors">Nuestra Historia</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contacto</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Preguntas Frecuentes</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-accent transition-colors"><FacebookIcon className="w-6 h-6" /></a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-accent transition-colors"><TwitterIcon className="w-6 h-6" /></a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-accent transition-colors"><InstagramIcon className="w-6 h-6" /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 py-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} La Librería de Adry. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;