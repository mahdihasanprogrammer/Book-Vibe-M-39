
const getAllReadListFromLocalDB = ()=>{

    const readList = localStorage.getItem('readList');

    if (readList) return JSON.parse(readList);
    return [];
}


const addAllReadListToLocalDB = (book)=>{
    const allBooks = getAllReadListFromLocalDB();
  
    const isExist = allBooks.find(b => b.bookId == book.bookId);

    if(!isExist){
        allBooks.push(book);
        localStorage.setItem('readList', JSON.stringify(allBooks))
    }
    
}


const getWishListFromLocalDB = ()=>{

   const wishList =localStorage.getItem('wishList');

   if(wishList) return JSON.parse(wishList) ;
   return []
  
};

console.log(getWishListFromLocalDB())

const addWishListToLocalDB = (book)=>{
    const allBooks = getWishListFromLocalDB();
    console.log(allBooks)

    const isExist = allBooks.find(b =>b.bookId == book.bookId);
    if(!isExist){
        allBooks.push(book);
        localStorage.setItem('wishList', JSON.stringify(allBooks));
    }
}



export {getAllReadListFromLocalDB, addAllReadListToLocalDB,getWishListFromLocalDB, addWishListToLocalDB}