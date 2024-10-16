import React, { useState, useEffect } from 'react';

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
              <div className="card mb-3">
                <img src={book.formats['image/jpeg']} className="card-img-top" alt={book.title} />
                <div className="card-body">
                  <h5 className="card-title">{book.title}</h5>
                  <p className="card-text">{book.authors[0]?.name}</p>
                  <button onClick={() => removeFromWishlist(book.id)} className="btn btn-danger">
                    Remove from Wishlist
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
