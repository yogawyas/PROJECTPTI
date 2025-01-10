import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav-menu">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/services" className="nav-link">Services</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
        <Link to="/membership" className="nav-link">Membership</Link>
      </nav>
    </header>
  );
};

export default Header;