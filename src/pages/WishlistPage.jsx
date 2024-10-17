import React, { useState, useEffect } from 'react';
import BookItem from '../components/BookItem';

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlist(storedWishlist);
  }, []);

  const removeFromWishlist = (bookId) => {
    const updatedWishlist = wishlist.filter(book => book.id !== bookId);
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  return (
    <div className="container">
      <h1>Your Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>No books in your wishlist.</p>
      ) : (
        <div className="row">
          {wishlist.map(book => (
            <div className="col-md-4" key={book.id}>
              <BookItem 
                book={book} 
                wishlist={wishlist}  
                removeFromWishlist={removeFromWishlist} 
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
