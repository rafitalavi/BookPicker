import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ onSearch, resetSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchFocus = (event) => {
    event.target.select();  // Select all text when focused
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    onSearch(searchTerm);   // Trigger the search when the button is clicked
  };

  const handleHomeClick = () => {
    setSearchTerm('');      // Reset search input
    resetSearch();          // Call a function to show all items again
  };

  return (
    <nav className="navbar fixed-top  navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" onClick={handleHomeClick}>Book Picker</Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/" onClick={handleHomeClick}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/wishlist">Wishlist</Link>
            </li>
          </ul>
          <form className="d-flex ms-auto" onSubmit={handleSearchSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search books by title"
              aria-label="Search books"
              value={searchTerm}
              onChange={handleSearchChange}
              onFocus={handleSearchFocus}  // Select all text when focused
            />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

// PropTypes for validation
Navbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  resetSearch: PropTypes.func.isRequired,
};

export default Navbar;
