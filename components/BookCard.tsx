
import React from 'react';
import { Book } from '../types';
import { ShoppingCartIcon } from './Icons';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
      <div className="relative h-64 overflow-hidden">
        <img src={book.imageUrl} alt={book.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-serif font-bold text-primary truncate">{book.title}</h3>
        <p className="text-gray-600 text-sm mb-3">{book.author}</p>
        <div className="mt-auto flex justify-between items-center">
          <p className="text-xl font-bold text-accent">${book.price.toFixed(2)}</p>
          <button className="flex items-center gap-2 bg-primary text-white py-2 px-4 rounded-full hover:bg-accent transition-colors duration-300">
            <ShoppingCartIcon className="w-5 h-5" />
            <span className="text-sm">Añadir</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
