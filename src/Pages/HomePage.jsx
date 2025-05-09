import React from 'react';
import Banner from '../Components/Banner';
import { useLoaderData } from 'react-router-dom';
import BookCart from '../Components/BookCart';


const HomePage = () => {
    
    const books=useLoaderData()
    // console.log(books)
    return (
        <div>
           <Banner></Banner>
           <h1 className='text-3xl text-center font-bold font-sans'>Books</h1>
          <div className='grid grid-cols-3 gap-3'>
          {
            books.map(book=><BookCart key={book.id} book={book}></BookCart>)
           }
          </div>
           
        </div>
    );
};

export default HomePage;