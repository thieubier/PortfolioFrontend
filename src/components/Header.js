import React from 'react';
import '../css/Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">myportfolio</h1>
      <nav>
        <ul className="nav-list">
          <li><a href="/" className="nav-link">home</a></li>
          <li><a href="/projects" className="nav-link">projects</a></li>
          <li><a href="/skills" className="nav-link">skills</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
