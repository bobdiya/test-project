import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='container'>
      <nav className='nav-bar'>
        <ul className='nav-list'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/categories">Categories</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
