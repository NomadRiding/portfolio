import React, { useEffect, useState } from 'react';
import '../styles/Carousel.css'; 
import trivia from '../assets/trivia.jpeg';
import tech from '../assets/techSkill.png';
import greenLog from '../assets/codingSubmission.png'

const Carousel = () => {
    const data = [trivia, tech, greenLog];
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const carouselInfiniteScroll = () => {
        setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const interval = setInterval(carouselInfiniteScroll, 3000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className='carousel-container'>
            {data.map((item, index) => (
                <div 
                    className='carousel-item'
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }} 
                    key={index}>
                    <img src={item} alt={`carousel item ${index}`} />
                </div>
            ))}
        </div>
    );
};

export default Carousel;