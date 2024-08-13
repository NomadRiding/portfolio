import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <>
      <div className='nav-container'>
       <nav className='header-title'>
        <Link>
        <img src={logo} alt="Logo Image" className='logo-image' />
        <h1 className='logo'></h1>
        </Link>
       </nav>
        <div className='link-container'>
        <Link className="nav-links">
          <h3>About</h3>
        </Link>
        <Link className="nav-links">
          <h3>Portfolio</h3>
        </Link>
        <Link className="nav-links">
          <h3>Resume</h3>
        </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar