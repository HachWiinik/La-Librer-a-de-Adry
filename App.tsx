import React, { useState, useMemo, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BookSection from './components/BookSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { NEW_ARRIVALS, BEST_SELLERS } from './constants';
import { Book } from './types';

const SplashScreen: React.FC<{ isVisible: boolean }> = ({ isVisible }) => (
  <div 
    className={`fixed inset-0 bg-light flex justify-center items-center z-[100] transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    aria-hidden={!isVisible}
  >
    <video
      src="https://res.cloudinary.com/dy08afhuz/video/upload/v1758339824/grok-video-8722a0bf-0ed9-4b4b-8f98-53d5cf0a3a79_3_jbdaox.mp4"
      autoPlay
      muted
      loop
      playsInline
      className="w-48 h-48"
      aria-label="Cargando La Librería de Adry"
    />
  </div>
);


const App: React.FC = () => {
  // Initialize state from localStorage for persistence
  const [searchQuery, setSearchQuery] = useState(
    () => localStorage.getItem('bookstoreSearchQuery') || ''
  );
  const [isLoading, setIsLoading] = useState(true);

  // Persist searchQuery to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('bookstoreSearchQuery', searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); 

    return () => clearTimeout(timer);
  }, []);

  const allBooks = useMemo(() => {
    const booksMap = new Map<number, Book>();
    [...NEW_ARRIVALS, ...BEST_SELLERS].forEach(book => {
      booksMap.set(book.id, book);
    });
    return Array.from(booksMap.values());
  }, []);

  const filteredBooks = useMemo(() => {
    if (!searchQuery.trim()) {
      return [];
    }
    return allBooks.filter(book =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, allBooks]);

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <>
      <SplashScreen isVisible={isLoading} />
      <div className={`min-h-screen bg-light transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Header searchQuery={searchQuery} onSearchChange={handleSearchChange} />
        <main>
          <Hero />
          {searchQuery.trim() ? (
            filteredBooks.length > 0 ? (
              <BookSection 
                title={`Resultados para "${searchQuery}"`} 
                books={filteredBooks} 
              />
            ) : (
              <section className="py-16 bg-light">
                <div className="container mx-auto px-6 text-center">
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">No se encontraron resultados</h2>
                  <p className="text-gray-700">
                    No pudimos encontrar ningún libro que coincida con tu búsqueda "{searchQuery}".
                  </p>
                </div>
              </section>
            )
          ) : (
            <>
              <BookSection title="Novedades" books={NEW_ARRIVALS} />
              <BookSection title="Los Más Vendidos" books={BEST_SELLERS} />
            </>
          )}
          <ContactForm />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;