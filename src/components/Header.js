// Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">
        <Link to="/" className="header-link">myportfolio</Link>
      </h1>
      <nav>
        <ul className="nav-list">
          <li><Link to="/" className="nav-link">home</Link></li>
          <li><Link to="/projects" className="nav-link">projects</Link></li>
          <li><Link to="/skills" className="nav-link">skills</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
