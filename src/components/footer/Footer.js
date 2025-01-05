import React from 'react';
import './Footer.css'; // Add styling here

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <p className="footer-follow-text">Follow us on:</p>
      <ul className="footer-social-links">
        <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook">Facebook</a></li>
        <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Twitter">Twitter</a></li>
        <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram">Instagram</a></li>
      </ul>
    </div>
    <p className="footer-copyright">
      &copy; {new Date().getFullYear()}
      </p>
  </footer>
);

export default Footer;
