import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/BookDetails.css'; // Import the CSS file
import '../styles/HomePage.css'; // Import HomePage CSS if needed

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // State to manage error

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`https://gutendex.com/books/${id}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch book details');
        }
        
        const data = await response.json();
        setBook(data);
      } catch (error) {
        setError(error.message); // Set error message if fetch fails
      } finally {
        setLoading(false); // Set loading to false after fetch is complete
      }
    };

    fetchBookDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center margin_laoding">
        <div className="spinner"></div>
        <p>Please wait, loading...</p>
      </div>
    ); // Show loading message & import  from HomePage.css
  }

  if (error) {
    return <p>Error: {error}</p>; // Show error message
  }

  if (!book) {
    return <p>No book found.</p>; // Handle case when book is not found
  }

  return (
    
    <div className="book-details-container">
      <div className="book-image">
        <img src={book.formats?.['image/jpeg']} alt={book.title} />
      </div>
      <div className="book-info">
        <h1 className="book-title">{book.title}</h1>
        <p className="book-author"><strong>Author:</strong> {book.authors?.[0]?.name}</p>
        <p className="book-subjects"><strong>Subjects:</strong> {book.subjects?.join(', ')}</p>
        <p className="book-languages"><strong>laguages:</strong> {book.languages}</p>
       
        <p className="book-downloads"><strong>Download Count:</strong> {book.download_count}</p>
      </div>
    </div>
  );
};

export default BookDetails;
