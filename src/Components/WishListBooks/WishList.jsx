import React, { useState } from 'react';
import { getWishList } from '../Utils';
import BookDetailsCart from '../BookDetailsCart';
import ReadBookCart from '../ReadBooks/ReadBookCart';
import Short from '../ReadBooks/Short';

const WishList = () => {
    const wishListBooks=getWishList()
     const [sortBooks, setSortBooks] = useState(wishListBooks);

    const handleSort = (sortType) => {
        if (sortType === "rating") {
          const newSort1 =[...sortBooks].sort((a, b) => {
            return b.rating - a.rating;
          });
          setSortBooks(newSort1);
        } else if (sortType === "page") {
          const newSort2 = [...sortBooks].sort((a, b) => {
            return b.totalPages - a.totalPages;
          });
    
          setSortBooks(newSort2);
        }
      };


    return (
        <div>
            <Short handleSort={handleSort} ></Short>
            <h1 className='text-xl font-bold my-4'>Wishlist Books : {wishListBooks.length}</h1>
            {
             sortBooks.map((book,idx)=><ReadBookCart key={idx} book={book}></ReadBookCart>)   
            }
        </div>
    );
};

export default WishList;