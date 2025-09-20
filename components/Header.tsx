import React, { useState } from 'react';
import { MenuIcon, SearchIcon, ShoppingCartIcon, XIcon } from './Icons';

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <li>
    <a href={href} className="text-primary hover:text-accent transition-colors duration-300 pb-1 border-b-2 border-transparent hover:border-accent">
      {children}
    </a>
  </li>
);

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ searchQuery, onSearchChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-light/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <img src="https://res.cloudinary.com/dy08afhuz/image/upload/v1758339823/grok-image-8722a0bf-0ed9-4b4b-8f98-53d5cf0a3a79_ojwimh.png" alt="La Librería de Adry Logo" className="w-10 h-10" />
          <span className="text-2xl font-serif font-bold text-primary">La Librería de Adry</span>
        </a>

        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8 font-medium">
            <NavLink href="#">Inicio</NavLink>
            <NavLink href="#">Libros</NavLink>
            <NavLink href="#">Contacto</NavLink>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar por título o autor..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-32 md:w-48 rounded-full bg-secondary py-2 pl-10 pr-4 text-sm text-primary placeholder-primary/60 focus:ring-2 focus:ring-accent focus:outline-none transition-all duration-300"
              aria-label="Buscar libros"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <SearchIcon className="w-5 h-5 text-primary/60" />
            </div>
          </div>

          <button className="text-primary hover:text-accent transition-colors duration-300">
            <ShoppingCartIcon className="w-6 h-6" />
          </button>
          <button className="md:hidden text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-light border-t border-secondary">
          <nav className="container mx-auto px-6 py-4">
            <ul className="flex flex-col items-center space-y-4 font-medium">
              <NavLink href="#">Inicio</NavLink>
              <NavLink href="#">Libros</NavLink>
              <NavLink href="#">Contacto</NavLink>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;