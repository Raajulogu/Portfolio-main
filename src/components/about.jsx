import React from 'react';
import "./about.css";

const About = () => {
  return (
    <div className='row'>
        <div className='row about'>
      <div className='col-md-4 about-image-container'>
        <div className='about-image'>
        <img id='about-img' src="https://bowwe.com/upload/domain/27639/images/Section_two_photo.webp?75075.29999995232"
        alt="img" />
        </div>
      </div>
      <div className='col-md-8 about-content'>
          <h1>About me</h1>
          <p className='about-para'>
            Full Stack Developer adept
            in working in both front-end
            and back-end development
            processes. Skilled in
            programming design,
            development, and
            implementation of
            functional specification
          </p>
      </div>
    </div>
    </div>
  )
}

export default About