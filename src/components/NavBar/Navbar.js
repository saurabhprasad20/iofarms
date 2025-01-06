import React from 'react';
import {NavLink } from 'react-router-dom';
import './Navbar.css'; // Add your styling here

const farmIcon = process.env.PUBLIC_URL + '/assets/farm-icon.png';
const NavBar = () => (
  <header className="navbar">
    <div className="navbar-title">
      <img src={farmIcon} alt="IOFarms Logo" className="navbar-icon" />
      <div>
      <h1 className="navbar-title-text">IOFarms</h1>
      <p className="navbar-tagline">Empowering Lives Through Organic Fields</p>
    </div>
    </div>
    <nav>
      <ul className="navbar-links">
        <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} aria-current = 'page'>Home</NavLink></li>
        <li><NavLink to="/blogs" className={({ isActive }) => (isActive ? 'active' : '')} aria-current='page'>Blogs</NavLink></li>
        <li><NavLink to="/stories" className={({ isActive }) => (isActive ? 'active' : '')} aria-current='page'>Stories</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')} aria-current='page'>About</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')} aria-current='page'>Contact Us</NavLink></li>
      </ul>
    </nav>
  </header>
);

export default NavBar;
