import React, { use } from 'react';
import BookCard from '../../ui/BookCard/BookCard';
const bookPromise = fetch('/booksData.json').then(res => res.json())

const AllBooks = () => {

    const booksData = use(bookPromise);

    return (
        <section className='my-15 md:my-20'>
            <h1 className='text-center font-bold text-4xl'>Books</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {
                booksData.map(book => <BookCard key={book.bookId} book={book} />)
            }
        </div>

        </section>
    );
};

export default AllBooks;