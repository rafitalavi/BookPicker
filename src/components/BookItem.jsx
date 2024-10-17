import React from 'react';
import { Link } from 'react-router-dom';

const BookItem = ({ book, wishlist = [], addToWishlist, removeFromWishlist }) => {
  const isWishlisted = wishlist.some((b) => b.id === book.id); // Safe to use .some() on wishlist

  return (
    <div className="card mb-3">
      <img src={book.formats['image/jpeg']} className="card-img-top" alt={book.title} />
      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
        <p className="card-text">{book.authors[0]?.name}</p>
        <div className=''>
        <Link to={`/book/${book.id}`}>View Details</Link>
        {isWishlisted ? (
          <button onClick={() => removeFromWishlist(book.id)}>❤️</button>
        ) : (
          <button onClick={() => addToWishlist(book)}>♡</button>
        )}

        </div>
       
      </div>
    </div>
  );
};

export default BookItem;
