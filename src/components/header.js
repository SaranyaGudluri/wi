import React from 'react';
import { Link } from 'react-router-dom';
import Search from './search';
import './header.css';

function Header({ onSearch }) {
  return (
    <header>
      <div className="header-top">
        <h3><Link to="/">Explore</Link></h3>
        <h3><Link to="/">Filter</Link></h3>
      </div>
      <div className="header-search">
        <Search onSearch={onSearch} />
        <Link to="/add-item"><button>Add New Item</button></Link>
      </div>
    </header>
  );
}

export default Header;
