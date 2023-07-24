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
            A recent graduate with a Bachelor of Science degree in Statistics 
            and a specialization in MERN stack development. Seeking a challenging 
            and rewarding position as a Full-Stack Developer where I can use my 
            skills and knowledge to create innovative and user-friendly web 
            application
          </p>
      </div>
    </div>
    </div>
  )
}

export default About