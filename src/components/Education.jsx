import React, { useEffect } from 'react';
import "./Education.css";

const Education = () => {
    useEffect(()=>{
        //observer 1
      const observer_1 = new IntersectionObserver(entries => {
        // Loop over the entries
        entries.forEach(entry => {
          // If the element is visible
          if (entry.isIntersecting) {
            // Add the animation class
            entry.target.classList.add('education-1-animation');
          }
        });
      });
      
      observer_1.observe(document.querySelector('.education-1'));
    
      //observer 2
      const observer_2 = new IntersectionObserver(entries => {
        // Loop over the entries
        entries.forEach(entry => {
          // If the element is visible
          if (entry.isIntersecting) {
            // Add the animation class
            entry.target.classList.add('education-2-animation');
          }
        });
      });
      
      observer_2.observe(document.querySelector('.education-2'));
      //observer 1
      const observer_3 = new IntersectionObserver(entries => {
        // Loop over the entries
        entries.forEach(entry => {
          // If the element is visible
          if (entry.isIntersecting) {
            // Add the animation class
            entry.target.classList.add('education-3-animation');
          }
        });
      });
      
      observer_3.observe(document.querySelector('.education-3'));
      },[])
  return (
    <div className='row education'>
        <div className='col education-box'>
            <div className='education-head'>
                <h1>Education</h1>
            </div>
            <div className='education-datas'>
                <div className='education-1-container'>
                <div className='education-1'>
                    <div className='education-1-data'>
                        <h1>HSC</h1>
                        <p>Indira Ghandhi Government Higher
                            Secondary School
                        </p>
                        <span className='education-1-year'>
                        2017-2019
                    </span>
                    </div>
                    <span style={{color:"blue",height:"35px",overflow:"hidden", marginLeft:"5%"}}>------------</span>
                    <span style={{backgroundColor:"blue",borderRadius:"100%",width:"10%",height:"25%"}}>
                    <span style={{backgroundColor:"red",borderRadius:"100%",width:"50%",height:"50%",
                        display:"flex",alignItems:"center",justifyContent:"center"
                            }}></span>
                    </span>
                </div> 
                </div>
                <div className='education-2-container'>
                <div className='education-2'>
                <span style={{backgroundColor:"blue",borderRadius:"100%",width:"10%",height:"25%"}}>
                    <span style={{backgroundColor:"red",borderRadius:"100%",width:"50%",height:"50%",
                        display:"flex",alignItems:"center",justifyContent:"center"
                            }}></span>
                </span>
            <span style={{color:"blue",height:"35px",overflow:"hidden", marginRight:"5%"}}>------------</span>
                   
                    <div className='education-2-data'>
                        <h1>Bsc.Statistics</h1>
                        <p>Indira Ghandhi College of 
                            Arts and Science
                        </p>
                        <span className='education-1-year'>
                        2019-2022
                    </span>
                    </div>
                    
                </div>
                </div>
                <div className='education-3-container'>
                <div className='education-3'>
                    <div className='education-3-data'>
                        <h1>MERN Stack Development</h1>
                        <p>GUVI GEEK NETWORK PRIVATE LIMITED
                        </p>
                        <span className='education-3-year'>
                        2023
                    </span>
                    </div>
                    <span style={{color:"blue",height:"35px",overflow:"hidden", marginLeft:"5%"}}>------------</span>
                    <span style={{backgroundColor:"blue",borderRadius:"100%",width:"10%",height:"25%"}}>
                    <span style={{backgroundColor:"red",borderRadius:"100%",width:"50%",height:"50%",
                        display:"flex",alignItems:"center",justifyContent:"center"
                            }}></span>
                    </span>
                </div> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Education

