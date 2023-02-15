import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const styles = {
  a: {
    textDecoration: 'none'
  }
}

function Navigation() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  if (Auth.loggedIn()) {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Lets Get Rich Together, {Auth.getProfile().data.username}!</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page"><Link to='/purchase' style={styles.a}>Purchase</Link></a>
              </li>
              <li className="nav-item">
                <a className="nav-link"><Link to='/about' style={styles.a}>About</Link></a>
              </li>
              <li className="nav-item">
                <a className="nav-link"><Link to='/me' style={styles.a}>Profile</Link></a>
              </li>
            </ul>
            <span className="nav-link" onClick={logout}> 
              <Link to='/' style={styles.a}>Log Out</Link>
            </span>
          </div>
        </div>
      </nav>
    );
  }
  // If logged out show login controls
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><Link to="/" style={styles.a}>Welcome!</Link></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link"><Link to="/login" style={styles.a}>Login</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link"><Link to="/signup" style={styles.a}>Signup</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link"><Link to="/about" style={styles.a}>About</Link></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navigation
