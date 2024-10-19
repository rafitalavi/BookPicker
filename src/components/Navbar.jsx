import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'; // Import NavLink
import '../styles/Navbar.css'; // Import your dedicated CSS file
import hamburgerIcon from '../assets/images/navbarIcon.png';
import BookPickerLogo from '../assets/images/BookPickerLogo.png'

const Navbar = ({ onSearch, onReset }) => {
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
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" onClick={onReset}><img className='logo' src={BookPickerLogo} alt="logo"  /> Book Picker</Link>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          
           <img  src={hamburgerIcon} alt="Menu"  />
          
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          {/*  (Home and Wishlist) */}
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" onClick={onReset} activeClassName="active">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/wishlist" activeClassName="active">WishList</NavLink>
            </li>
          </ul>

          {/* (Search bar) */}
          <form className="d-flex mx-auto" onSubmit={handleSearchSubmit}>
            <input
              className="form-control me-2 search-bar"
              type="search"
              placeholder="Search books by title"
              aria-label="Search"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>

          {/*  (Login and Signup) */}
          <div className="d-flex ms-auto loginbutton">
            <Link to="/login">
              <button className="btn btn-outline-primary me-2">Login</button>
            </Link>
            <Link to="/signup">
              <button className="btn btn-primary">Signup</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
