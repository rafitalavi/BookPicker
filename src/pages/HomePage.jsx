// src/pages/HomePage.jsx
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import BookItem from '../components/BookItem';
import Pagination from '../components/Pagination';
import { WishlistContext } from '../context/WishlistContext';
import '../styles/HomePage.css'; 

const HomePage = ({ searchTerm, genre, setGenre }) => {
  const { wishlist, addToWishlist, removeFromWishlist } = useContext(WishlistContext);
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(8);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true); // Set loading to true when fetching starts
      try {
        const response = await axios.get('https://gutendex.com/books');
        setBooks(response.data.results);
        const allGenres = new Set();
        response.data.results.forEach(book => book.subjects.forEach(subject => allGenres.add(subject)));
        setGenres(['All', ...Array.from(allGenres)]);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchBooks();
  }, []);

  useEffect(() => {
    setCurrentPage(1); // Reset to page 1 when genre changes
  }, [genre]);

  const filteredBooks = books.filter(book => {
    const matchesSearch = searchTerm === '' || book.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = genre === 'All' || book.subjects.includes(genre);
    return matchesSearch && matchesGenre;
  });

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleGenreChange = (event) => {
    setGenre(event.target.value);
    setCurrentPage(1); // Reset to the first page when genre changes
  };

  return (
    <div className="container homepage_margin_top">
      <h2>Wellcome To Book Picker</h2>
      <div className="mb-3 ">
        <label htmlFor="genreFilter">Filter by Genre/Topic:</label>
        <select id="genreFilter"  className="genre-select" onChange={handleGenreChange} value={genre}>
          {genres.map((genreOption, index) => (
            <option key={index}   value={genreOption}>{genreOption}</option>
          ))}
        </select>
      </div>

      {loading ? (
        <div className="text-center margin_laoding"> 
          <div className="spinner"></div> 
          <p>Please wait, loading...</p>
        </div>
      ) : (
        <>
          <div className="row">
            {currentBooks.map(book => (
              <div className="col-lg-3 col-md-4 col-sm-6" key={book.id}>
                <BookItem
                  book={book}
                  wishlist={wishlist}
                  addToWishlist={addToWishlist}
                  removeFromWishlist={removeFromWishlist}
                />
              </div>
            ))}
          </div>

          <Pagination
            booksPerPage={booksPerPage}
            totalBooks={filteredBooks.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </>
      )}
    </div>
  );
};

export default HomePage;
