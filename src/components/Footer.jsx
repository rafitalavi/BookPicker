import React from 'react';
import '../styles/Footer.css'; // Link to the CSS for your footer styling

const Footer = () => {
  return (
    <footer className="footer ">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <h5>About Us</h5>
            <p>BookPicker is a platform where you can find your favorite books and add them to your wishlist.</p>
          </div>
          
          <div className="col-md-4 col-sm-12">
            <h5>Follow Us</h5>
            <ul className="social-icons">
              <li> <a href="https://facebook.com">Facebook</a></li>
              <li><a href="https://twitter.com">Twitter</a></li>
              <li><a href="https://instagram.com">Instagram</a></li>
            </ul>
          </div>
          <div className="col-md-4 col-sm-6">
            <h5>Contact Us</h5>
            <ul>
                <li>email:<a href="https://mail.google.com/mail"> google@gmail.com</a></li>
                <li>Phone: +88013490009535</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center mt-3">
            <p>&copy; {new Date().getFullYear()} BookPicker. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
