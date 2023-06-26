import React from 'react';
import "./Education.css";

const Education = () => {
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


/*
<div className='education-datas'>
            <div className=' education-data-left'>
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
                    <span style={{color:"blue", marginLeft:"5%"}}>------------</span>
                    <span style={{backgroundColor:"blue",borderRadius:"100%",width:"10%",height:"25%"}}>
                    <span style={{backgroundColor:"red",borderRadius:"100%",width:"50%",height:"50%",
                        display:"flex",alignItems:"center",justifyContent:"center"
                            }}></span>
                    </span>
                </div> 
                <div className='education-3'>
                    <div className='education-3-data'>
                        <h1>MERN Stack Development</h1>
                        <p>GUVI GEEK NETWORK PRIVATE LIMITED
                        </p>
                        <span className='education-3-year'>
                        2023
                    </span>
                    </div>
                    <span style={{color:"blue", marginLeft:"5%"}}>------------</span>
                    <span style={{backgroundColor:"blue",borderRadius:"100%",width:"10%",height:"25%"}}>
                    <span style={{backgroundColor:"red",borderRadius:"100%",width:"50%",height:"50%",
                        display:"flex",alignItems:"center",justifyContent:"center"
                            }}></span>
                    </span>
                </div> 
            </div>
            <div className='education-data-right'>
            <div className='education-2'>
            <span style={{backgroundColor:"blue",borderRadius:"100%",width:"10%",height:"25%"}}>
                    <span style={{backgroundColor:"red",borderRadius:"100%",width:"50%",height:"50%",
                        display:"flex",alignItems:"center",justifyContent:"center"
                            }}></span>
                    </span>
            <span style={{color:"blue", marginRight:"5%"}}>------------</span>
                   
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
            </div>
*/ 