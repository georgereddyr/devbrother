import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar(props) {
  const token = props.token;

  function logOut() {
    localStorage.clear();
    props.setToken(null);
  }

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>

          <div className='nav-item'>
            <Link to='/' className='nav-link' >
              Home
            </Link>
          </div>

          {token ? <>
            <div className='nav-item'>
              <Link to='/Dashboard' className='nav-link'>
                Dashboard
              </Link>
            </div>

            <div className='nav-item'>
              <Link to='/'  className='nav-link' onClick={logOut}>
                Log Out
              </Link>
            </div>
          </> : 
          <>
            <div className='nav-item'>
              <Link to='/sign-up' className='nav-link'>
                Sign Up
              </Link>
            </div>

            <div className='nav-item'>
              <Link to='/login' className='nav-link'>
                Log in
              </Link>
            </div>
          </>}
        </div>
      </nav>
    </>
  );
}