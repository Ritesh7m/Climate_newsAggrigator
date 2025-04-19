import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer>
     
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-about">
            <h2>About Us</h2>
            <p>
              We are dedicated to providing the latest news and insights on
              climate action. Join us in making a difference for our planet.
            </p>
          </div>
          <div className="footer-links">
            <h2>Quick Links</h2>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#article">News</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-info">
            <h2>Official Info</h2>
            <ul>
              <li>
                <i className="fa-regular fa-envelope"></i>
                <a href="#">  Email: ritesh2005@gmail.com</a>
              </li>
              <li>
                <i className="fa-solid fa-phone"></i>
                <a href="#"> Phone: +91-7275056945</a>
              </li>
            </ul>
          </div>
          <div className="footer-social">
            <h2>Follow Us</h2>
            <a href="#">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Climate Action. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
