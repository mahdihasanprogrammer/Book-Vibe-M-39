import React, { useContext} from 'react';
import { useLoaderData, useParams } from 'react-router';
import { bookContext } from '../../context/BookProvider';



const BookDetails = () => {
  
    const {id} = useParams();
    const books = useLoaderData();
  
    
    const expectedBook = books.find(book => book.bookId === +id);

    const {
       bookName,author,image, review, totalPages,rating,category,tags,publisher,yearOfPublishing

    } = expectedBook;

    const {handleMarkAsRead,handleAddToWishList} = useContext(bookContext);
   
  


    
  return (
    <div className="flex flex-col md:flex-row bg-base-100  mt-10 mb-20 gap-10">

        <figure className='flex-1  bg-base-300 rounded-2xl flex items-center    justify-center'>
            <img className='md:h-[564px] md:w-[425px] p-10' src={image} />
        </figure>

      <div className="flex-1 space-y-4" >

            <div className='space-y-4'>
                  <h2 className="text-4xl font-bold fire-font">{bookName}</h2>
                 <h4 className='text-xl font-medium'>By : {author}</h4>
            </div>

            <h3 className='border-y border-gray-300 py-4 text-xl font-medium' >{category}</h3>
        
            <div className='text-base'>
                <span className='font-bold'>Review :</span> <span className='text-gray-600 leading-6'>{review}</span>
            </div   >

            <div className="flex gap-5 items-center">
                <h2 className='font-bold'>Tag</h2>
                {
                    tags.map((tag, index) => 
                    <span className='text-base box-content py-1 rounded-full badge text-[#23BE0A] bg-[#ecf9ea]' key={index}>{tag}</span>)
                }
            </div   >

            <div className='flex gap-15 items-center border-t pt-4 border-gray-300 text-base leading-6' >

                <div className=' text-gray-700 space-y-4'>
                    <p >Number of Pages:</p>
                    <p >Publisher:</p>
                    <p >Year Of Publishing</p> 
                    <p >Rating</p> 
                </div   >

            
                <div className='space-y-4 font-bold'>
                    <p>{totalPages}</p>
                    <p>{publisher}</p>
                    <p>{yearOfPublishing}</p>
                    <p>{rating}</p>
                </div>
            </div   >  


            <div className="flex gap-3 mt-7">
              <button onClick={()=>{handleMarkAsRead(expectedBook)}}
               className="btn ">Mark as Read</button>


              <button onClick={()=>{handleAddToWishList(expectedBook)}}
               className="btn bg-[#50B1C9] text-white">Add to Wishlist</button>
            </div>

      </div>

    </div>
    );
};

export default BookDetails;