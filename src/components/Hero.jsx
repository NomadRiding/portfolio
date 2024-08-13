import React from 'react';
import '../styles/Hero.css';
import Carousel from './Carousel';

function Hero() {
  return (
    <div className='hero-container'>
        <div className="hero-title">
            <h1>Albert F</h1>
        </div>
        <div className="carousel-section">
            <Carousel />
        </div>

    </div>
  )
}

export default Hero