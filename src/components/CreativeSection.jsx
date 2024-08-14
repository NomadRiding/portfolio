import React from 'react'
import '../styles/CreativeSection.css';
import typing from '../assets/typing.mp4';
import js from '../assets/js.png';
import react from '../assets/react.png';
import ruby from '../assets/ruby.png';

const CreativeSection = () => {

  return (
    <div className='creative-section-container'>
        <div className='sections-split'>
            <div className="image-container">
            <video src={typing} autoPlay loop muted className='typing-video'/>
            </div>
            <div className="right-section">
            <div className="creative-section-title">
                <h1>Software Engineer</h1>
            </div>
            <div className="creative-section-paragraph">
                <div className="paragraph-images">
                    <img src={react} alt="" />
                    <img src={js} alt="" />
                    <img src={ruby} alt="" />
                </div>
                <p className='paragraph-section'>
                    I’m continually expanding my expertise in React.js, Ruby on Rails, and JavaScript. Currently, 60% of my work focuses on personal projects that deepen my skills and solidify the knowledge gained from various bootcamps, while 40% is dedicated to freelance work. </p> 
                <p className='paragraph-section'>
                I also manage an e-commerce website that I developed, which now generates over $25,000 in monthly revenue. Whether collaborating with former classmates, cross-functional teams, or independently driving projects, I set strict deadlines and benchmark goals, mirroring the structure of an Agile environment.
                </p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default CreativeSection