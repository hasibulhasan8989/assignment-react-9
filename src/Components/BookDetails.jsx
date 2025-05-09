import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import BookDetailsCart from './BookDetailsCart';

const BookDetails = () => {
    const books=useLoaderData()
    const {id}=useParams()
    const newId=parseInt(id)

   
   
   
       
    return (
        <div>
            
               {Array.isArray(books) &&
                books.filter(book => book.id === newId).map(book => (
                 <BookDetailsCart key={book.id} book={book} />
                ))}
          
        </div>
    );
};

export default BookDetails;