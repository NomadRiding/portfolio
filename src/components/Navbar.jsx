import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <>
      <div className='nav-container'>
       <nav className='header-title'>
        <Link className="nav-logo-link">
        <h2 className='logo'>&lt; AF &gt;</h2>
        </Link>
       </nav>
        <div className='link-container'>
        <Link className="nav-links">
          <h2>About</h2>
        </Link>
        <Link className="nav-links">
          <h2>Portfolio</h2>
        </Link>
        <Link className="nav-links">
          <h2>Resume</h2>
        </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar