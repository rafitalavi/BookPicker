import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import WishlistPage from './pages/WishlistPage';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term); // Update the search term
  };

  const resetSearch = () => {
    setSearchTerm(''); // Reset the search term when home is clicked
  };

  return (
    <Router>
      {/* Pass resetSearch along with onSearch */}
      <Navbar onSearch={handleSearch} resetSearch={resetSearch} />
      <Routes>
        {/* Pass searchTerm as a prop to HomePage */}
        <Route path="/" element={<HomePage searchTerm={searchTerm} />} />
        <Route path="/wishlist" element={<WishlistPage />} />
      </Routes>
    </Router>
  );
}

export default App;
