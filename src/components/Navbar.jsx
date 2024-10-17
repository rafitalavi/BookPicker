import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ onSearch ,onReset }) => {
  console.log(onSearch); // Debugging line
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    onSearch(searchTerm); // Call onSearch with the current search term
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" onClick={onReset}>Book Picker</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={onReset}>Home</Link>
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
              aria-label="Search"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button className="btn btn-outline-success" type="submit">Search</button> {/* Search button */}
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
