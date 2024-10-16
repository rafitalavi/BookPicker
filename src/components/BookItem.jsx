import React from 'react';

const BookItem = ({ book }) => {
  return (
    <div className="card mb-3">
      <img src={book.formats['image/jpeg']} className="card-img-top" alt={book.title} />
      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
        <p className="card-text">{book.authors[0]?.name}</p>
      </div>
    </div>
  );
};

export default BookItem;
