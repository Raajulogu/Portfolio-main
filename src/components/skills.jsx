<<<<<<< HEAD
import React from 'react';
import "./skill.css";

const Skills = () => {
=======
import React, { useEffect } from 'react';
import "./skill.css";

const Skills = () => {
  useEffect(()=>{
    //observer 1
  const observer_1 = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('skill-1-animation');
      }
    });
  });
  
  observer_1.observe(document.querySelector('.skill-1'));

  //observer 2
  const observer_2 = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('skill-2-animation');
      }
    });
  });
  
  observer_2.observe(document.querySelector('.skill-2'));
  
  //observer 3
  const observer_3 = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('skill-3-animation');
      }
    });
  });
  
  observer_3.observe(document.querySelector('.skill-3'));

  //observer 4
  const observer_4 = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('skill-4-animation');
      }
    });
  });
  
  observer_4.observe(document.querySelector('.skill-4'));

  //observer 5
  const observer_5 = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('skill-5-animation');
      }
    });
  });
  
  observer_5.observe(document.querySelector('.skill-5'));
  },[]);

>>>>>>> 45c4d5f (final _commit)
  return (
    <div className='row skill'>
        <div className='col skill-box'>

        <h1 className='skill-head'>Skills</h1>
            <div className='col-md-10 skills'>
              <div className="skill-container">
              <div className='skill-title'>
                <div>ReactJs</div>
                <div>75%</div>
              </div>
                <div className='skill-none'>
                <div className='skill-1'></div>
                </div>
                </div>

                <div className="skill-container">
              <div className='skill-title'>
                <div>NodeJs</div>
                <div>70%</div>
              </div>
                <div className='skill-none'>
                <div className='skill-2'></div>
                </div>
                </div>

                <div className="skill-container">
              <div className='skill-title'>
                <div>HTML/CSS</div>
                <div>80%</div>
              </div>
                <div className='skill-none'>
                <div className='skill-3'></div>
                </div>
                </div>

                <div className="skill-container">
              <div className='skill-title'>
                <div>JavaScript</div>
                <div>85%</div>
              </div>
                <div className='skill-none'>
                <div className='skill-4'></div>
                </div>
                </div>

                <div className="skill-container">
              <div className='skill-title'>
                <div>Python</div>
                <div>65%</div>
              </div>
                <div className='skill-none'>
                <div className='skill-5'></div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills 