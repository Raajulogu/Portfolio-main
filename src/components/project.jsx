import React from 'react';
import "./project.css";

const Project = () => {
  return (
    <div className='row project'>
      <div className='col project-title'>
      <div className='project-head'>
        <h1>Projects</h1>
      </div>

      </div>
      <div className='row project-body'>
      <div className='col-md-4'>
        <div className='project-image'>
        <a href='https://stately-zuccutto-ff4067.netlify.app/' target="_blank">
        <img id='project-img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Mail_%28iOS%29.svg/640px-Mail_%28iOS%29.svg.png"
        alt="img" />
        </a>
        </div>
      </div>
      <div className='col-md-8 project-content'>
          <h1>Your Mailer</h1>
          <p className='project-para'>Here you can send <b>Emails</b> to a large group of recipients at a time. 
          You can send your email by manually entering your email address or 
          uploading a CSV file. You can also insert cc and bcc in your file. 
          In the CSV file, the column heading must <b>email</b> for <b>To</b>, 
          <b> cc</b> for <b>cc</b>, <b>bcc</b> for <b>bcc</b>. You can send email delays 
          by using Delay Option. The delay value should be in <b>seconds</b>.
          </p>
      </div>
      </div>
    </div>
  )
}

export default Project