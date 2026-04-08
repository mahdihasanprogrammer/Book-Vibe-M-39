import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getAllReadListFromLocalDB } from '../utility/localDB';

export const bookContext = createContext(null);



const BookProvider = ({children}) => {
 

const [storedBooks, setStored] = useState([]);
const [wishListBooks, setWishListBook] = useState([]);

useEffect(() => {
    getAllReadListFromLocalDB()
},[])

const handleMarkAsRead =(currentBook)=>{
    // step 1 : stored current book object or current book id;
    // step 2: if the book is already exist, show the toast book already exist 
    // step 3: where stored books , array or collection;

    const filteredWishListBooks = wishListBooks.filter(book => book.bookId !== currentBook.bookId)
    setWishListBook(filteredWishListBooks)


    const isExist = storedBooks.find(book => book.bookId == currentBook.bookId);
    

    if(isExist){
        toast.error('this book is already in Read list');
       
        
    }
    else{
         setStored([...storedBooks, currentBook]);
        toast.success(`${currentBook.bookName} is added in Read list`)
        
    }
    
}

const handleAddToWishList = (currentBook) =>{
    
    const filteredStoredBooks = storedBooks.filter(book => book.bookId !== currentBook.bookId);
    setStored(filteredStoredBooks);

    const isWishList = wishListBooks.find(book => book.bookId == currentBook.bookId);
   

   
    
    if(isWishList){
        toast.error('book is already in wishList');
    }else{
        setWishListBook([...wishListBooks, currentBook]);
        toast.success(`${currentBook.bookName} is added in wishList`)
    }
}


const data = {
    storedBooks,
    setStored,
    handleMarkAsRead,
    wishListBooks,
    setWishListBook,
    handleAddToWishList
}


    return (
      <bookContext.Provider value={data}>
        
        {children}
      </bookContext.Provider>
    );
};

export default BookProvider;