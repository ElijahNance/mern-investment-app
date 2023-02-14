import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';

const Header = () => {
  return (
    <header>
      <div>
        <Link to="/">
          <h1>Centaur Investments</h1>
        </Link>
      </div>
      <div>
        <p>A Curated Investing Experience</p>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
