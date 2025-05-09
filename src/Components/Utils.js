import toast from "react-hot-toast";

export const getBooks = () => {
  let books = [];
  const storedBooks = localStorage.getItem("books");
  if (storedBooks) {
    return JSON.parse(storedBooks);
  }
  return books;
};

export const getWishList = () => {
  let books = [];
  const storedBooks = localStorage.getItem("wishList");
  if (storedBooks) {
    return JSON.parse(storedBooks);
  }
  return books;
};



export const setBooks = (book) => {
  const storedBooks = getBooks();

  const exist = storedBooks.filter((item) => item.id === book.id);
  
  if (exist.length < 1) {
    storedBooks.push(book);
    localStorage.setItem("books", JSON.stringify(storedBooks));
    toast.success("Add Read Successfully");
    

  } else {
    toast.error("Already Add to Read");
    return exist
   
   

  }
};

export const setWishList = (book) => {
  
  const storedBooks = getWishList()
  const readBooks=getBooks()

  console.log(readBooks)
  const exist=readBooks.filter(rb=>rb.id === book.id)

  if(exist<1){
    storedBooks.push(book);
    localStorage.setItem("wishList", JSON.stringify(storedBooks));
    toast.success("Add Wishlist To Successfully");
  }

  else{
    toast.error("Already You Read");
  }



};
