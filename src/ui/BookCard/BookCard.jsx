import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router';

const BookCard = ({book}) => {


return (

<Link to={`/bookDetails/${book.bookId}`} className="card  shadow-sm p-6">
  <figure className='bg-base-300 rounded-2xl py-8'>
    <img className='h-64 rounded-md' src={book.image} alt={book.bookName} />
  </figure>

  <div className="flex flex-col flex-1 py-6 space-y-4">

    {/* badge */}
        <div className="flex gap-3">
        {
            book.tags.map((tag, index) => 
            <span className='text-base box-content py-1 rounded-full badge text-[#23BE0A] bg-[#ecf9ea]' key={index}>{tag}</span>)
        }
        </div>

        <h2 className=" flex-1  text-2xl font-bold fire-font">
           {book.bookName}
        </h2>
        <p className='font-medium text-gray-700'>By : {book.author}</p>

        <div className="card-actions justify-between border-t-2 border-dashed border-gray-300 pt-5 font-medium">
          <div className="">{book.category}</div>
          <div className="flex gap-3 items-center">{book.rating} <FaRegStar /></div>
        </div>
  </div>
</Link>
    );
};

export default BookCard;