
import React from 'react';
import { Book } from '../types';
import BookCard from './BookCard';

interface BookSectionProps {
  title: string;
  books: Book[];
}

const BookSection: React.FC<BookSectionProps> = ({ title, books }) => {
  return (
    <section className="py-16 bg-light">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-primary">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookSection;
