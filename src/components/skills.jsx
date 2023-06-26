import React from 'react';
import "./skill.css";

const Skills = () => {
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