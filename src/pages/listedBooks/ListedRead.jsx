
import React, { useContext } from 'react';
import { bookContext } from '../../context/BookProvider';
import { GrLocation } from 'react-icons/gr';
import { HiOutlineDocumentReport, HiOutlineUsers } from 'react-icons/hi';
import { Link } from 'react-router';

const ListedRead = ({sortingType}) => {
const {storedBooks} = useContext(bookContext);

// const [filteredReadList, setFilteredReadList]= useState([...storedBooks]);
console.log(sortingType)
 
// useEffect(() => {
//         let sortedData = [...storedBooks]; 
//         if (sortingType === 'Pages') {
//             sortedData.sort((a, b) => a.totalPages - b.totalPages);
//         } else if (sortingType === 'Rating') {
//             sortedData.sort((a, b) => a.rating - b.rating);
//         }
//         setFilteredReadList(sortedData);
//     }, [storedBooks, sortingType]);

let filteredReadList = storedBooks;
 if(sortingType== 'Pages'){
    filteredReadList = [...storedBooks].sort((a,b)=> a.totalPages - b.totalPages);
 }
 else if(sortingType=='Rating'){
    filteredReadList=[...storedBooks].sort((a,b) => a.rating -b.rating);
 }

  if(filteredReadList.length===0){
        return(
            <div className='h-[50vh] bg-gray-100 rounded-2xl flex justify-center items-center text-3xl font-bold text-gray-700 mt-8'>
                <h1>No Read book found</h1>
            </div>
        )
    }

    return (
           <div className='space-y-4 my-8'>
               {
                  filteredReadList.map(book => 
   
           <div className="flex flex-col md:flex-row bg-base-100  gap-6 p-6 border-2 border-gray-200 rounded-2xl">
   
           <figure className='py-7 px-12  bg-base-300 rounded-2xl flex items-center    justify-center'>
               <img className=' h-auto sm:h-96 md:h-44' src={book.image} />
           </figure>
   
         <div className=" space-y-4 flex-1" >
   
               <div className='space-y-2'>
                     <h2 className="text-2xl font-bold fire-font">{book.bookName}</h2>
                    <h4 className='text-base font-medium'>By : {book.author}</h4>
               </div>
   
   
               <div className="flex gap-4 items-center flex-wrap">
                   <h2 className='font-bold'>Tag</h2>
                   {
                       book.tags.map((tag, index) => 
                       <span className='text-base box-content py-1 rounded-full badge text-[#23BE0A] bg-[#ecf9ea]' key={index}>{tag}</span>)
                   }
   
                   <div className='flex items-center gap-2'>
                       <span><GrLocation /></span>
                       <p>Year of Publishing: {book.yearOfPublishing}</p>
                   </div>
               </div >
   
               <div className='text-gray-500  flex items-center gap-4 flex-wrap'>
                   <h2 className='flex items-center gap-1'><HiOutlineUsers /> Publisher: {book.publisher}</h2>
   
                   <h3 className='flex items-center gap-1'><HiOutlineDocumentReport/> Page {book.totalPages}</h3>
               </div>

               <hr className='border border-gray-200 w-full' />
   
               <div className='flex items-center gap-4 flex-wrap'>
                   <button className='btn rounded-full btn-primary btn-soft'>Category: {book.category}</button>
   
                   <button className='btn text-[#FFAC33] bg-[#faefdf] rounded-full border-none'>Rating: {book.rating}</button>
   
                   <Link to={`/bookDetails/${book.bookId}`}
                    className='btn rounded-full bg-[#23BE0A] text-white hover:bg-[#1dac07]'>View Details</Link>
               </div>
         </div>
   
       </div>
                   )
               }
           </div>
       );
};

export default ListedRead;