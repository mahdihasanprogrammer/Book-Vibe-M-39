import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { addAllReadListToLocalDB, addWishListToLocalDB, getAllReadListFromLocalDB, getWishListFromLocalDB } from '../utility/localDB';

export const bookContext = createContext();



const BookProvider = ({children}) => {
 

const [storedBooks, setStored] = useState(()=>getAllReadListFromLocalDB());

const [wishListBooks, setWishListBook] = useState(()=>getWishListFromLocalDB());



const handleMarkAsRead =(currentBook)=>{
    // step 1 : stored current book object or current book id;
    // step 2: if the book is already exist, show the toast book already exist 
    // step 3: where stored books , array or collection;
    addAllReadListToLocalDB(currentBook);

    const filteredWishListBooks = wishListBooks.filter(book => book.bookId !== currentBook.bookId)

    setWishListBook(filteredWishListBooks);

    localStorage.setItem('wishList', JSON.stringify(filteredWishListBooks))
    console.log(filteredWishListBooks)
   

    const isExist = storedBooks.find(book => book.bookId == currentBook.bookId);
    

    if(isExist){
        toast.error('this book is already in Read list');
       
        
    }
    else{
         setStored([...storedBooks, currentBook]);
         console.log(storedBooks)
        toast.success(`${currentBook.bookName} is added in Read list`)
        
    }
    
}



const handleAddToWishList = (currentBook) =>{

    addWishListToLocalDB(currentBook);

   
    
    const filteredStoredBooks = storedBooks.filter(book => book.bookId !== currentBook.bookId);

    setStored(filteredStoredBooks);

    localStorage.setItem('readList', JSON.stringify(filteredStoredBooks));

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