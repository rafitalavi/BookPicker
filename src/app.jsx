// src/App.jsx
import React, { useState } from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import WishlistPage from './pages/WishlistPage';
import BookDetails from './components/BookDetails';
import WishlistProvider from './context/WishlistContext';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [genre, setGenre] = useState('All'); // State to manage genre in App component

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleReset = () => {
    setSearchTerm('');
    setGenre('All'); // Reset the genre to 'All'
  };

  return (
    <WishlistProvider>
      <Router>
        <Navbar onSearch={handleSearch} onReset={handleReset}/> 
        <Routes>
          <Route 
            path="/" 
            element={<HomePage searchTerm={searchTerm} genre={genre} setGenre={setGenre} />} 
          />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/book/:id" element={<BookDetails />} />
        </Routes>
      </Router>
    </WishlistProvider>
  );
}

export default App;
