import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookItem from '../components/BookItem';
import Pagination from '../components/Pagination';

const HomePage = ({ searchTerm }) => {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(9);
  const [genre, setGenre] = useState('All');
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    axios.get('https://gutendex.com/books')
      .then(response => {
        setBooks(response.data.results);
        const allGenres = new Set();
        response.data.results.forEach(book => book.subjects.forEach(subject => allGenres.add(subject)));
        setGenres(['All', ...Array.from(allGenres)]);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (genre === 'All' || book.subjects.includes(genre))
  );

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleGenreChange = (event) => {
    setGenre(event.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="container">
      <h1>Book List</h1>
      <div className="mb-3">
        <label htmlFor="genreFilter">Filter by Genre/Topic:</label>
        <select id="genreFilter" onChange={handleGenreChange} value={genre}>
          {genres.map((genreOption, index) => (
            <option key={index} value={genreOption}>{genreOption}</option>
          ))}
        </select>
      </div>

      <div className="row">
        {currentBooks.map(book => (
          <div className="col-md-4" key={book.id}>
            <BookItem book={book} />
          </div>
        ))}
      </div>

      <Pagination
        booksPerPage={booksPerPage}
        totalBooks={filteredBooks.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default HomePage;
