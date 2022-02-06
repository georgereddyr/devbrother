import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar({auth, logOut}) {
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>

          <div className='nav-item'>
            <Link to='/' className='nav-link' >
              Home
            </Link>
          </div>

          {auth ? <>
            <div className='nav-item'>
              <Link to='/Dashboard'>
                Dashboard
              </Link>
            </div>

            <div className='nav-item'>
              <button onClick={logOut}>Log Out</button>
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