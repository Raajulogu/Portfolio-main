<<<<<<< HEAD
import React from 'react';
import "./about.css";

const About = () => {
=======
import React, { useEffect } from 'react';
import "./about.css";

const About = () => {
  useEffect(()=>{
    //observer 1
  const observer_1 = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('about-image-animation');
      }
    });
  });
  
  observer_1.observe(document.querySelector('.about-image'));

  //observer 2
  const observer_2 = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('about-content-animation');
      }
    });
  });
  
  observer_2.observe(document.querySelector('.about-content'));

  },[]);

>>>>>>> 45c4d5f (final _commit)
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