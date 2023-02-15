import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navbar';
import Logo from '../Header/logo_black.png';

const styles = {
  p: {
      fontSize: 20
  }
}

const Header = () => {
  return (
    <header>
      <div className='text-center'>
        <Link to="/">
          {/* <h1 className='text-center'>Centaur Investments</h1> */}
          <img src={Logo}></img>
        </Link>
      </div>
      <div>
        <p className='text-center' style={styles.p}>A Curated Investing Experience</p>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
