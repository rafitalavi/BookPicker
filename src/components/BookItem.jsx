import React from "react";
import { Link } from "react-router-dom";
import "../styles/BookItem.css";

const BookItem = ({
  book,
  wishlist = [],
  addToWishlist,
  removeFromWishlist,
}) => {
  const isWishlisted = wishlist.some((b) => b.id === book.id);

  return (
    <div className="card mb-3 bookCard">
      <Link to={`/book/${book.id}`}>
        <img
          src={book.formats["image/jpeg"]}
          className="card-img-top"
          alt={book.title}
        />
      </Link>

      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
        <p className="card-text">{book.authors[0]?.name}</p>
        <div className="d-flex justify-content-between">
          <Link to={`/book/${book.id}`} className="view-details-link">
            View Details
          </Link>
          {isWishlisted ? (
            <button
              className="wishlist-btn"
              onClick={() => removeFromWishlist(book.id)}
            >
              ❤️
            </button>
          ) : (
            <button
              className="wishlist-btn"
              onClick={() => addToWishlist(book)}
            >
              🤍
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookItem;
