import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

function Navbar() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  
  if (Auth.loggedIn()) {
    return (
      <>
        <Link to="/me">
          Welcome Back {Auth.getProfile().data.username}!
        </Link>
        <button onClick={logout}>
          Logout
        </button>
        <Link to="/about">
        About
      </Link>
      <Link to="/purchase">
        Purchase
      </Link>
      </>
    );
  }
  // If logged out show login controls
  return (
    <>
      <Link to="/login">
        Login
      </Link>
      <Link to="/signup">
        Signup
      </Link>
      <Link to="/about">
        About
      </Link>
    </>
  )
}

export default Navbar
