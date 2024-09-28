// src/components/Navbar/index.jsx
import React from 'react';
import './Navbar.css'; // Import file CSS untuk styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-text-container">
          <img
            src="/public/logo kp.jpg" // Ganti dengan path gambar yang benar
            alt="Logo"
            className="navbar-logo"
          />
          <h1 className="navbar-title">Kampung Kerupuk</h1>
        </div>
        <ul className="navbar-menu">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
