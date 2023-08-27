import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
<<<<<<< HEAD
import React, { useRef } from 'react'
=======
import React, { useEffect, useRef } from 'react'
>>>>>>> 45c4d5f (final _commit)
import * as yup from "yup";
import SendIcon from '@mui/icons-material/Send';
import emailjs from 'emailjs-com';
import "./contact.css";


const Contact = () => {
  //Mail Sender
  let form =useRef()
  function sendMessage(e){
    e.preventDefault();    
      console.log(form.current)
        emailjs.sendForm('service_5tm7opw', 'template_faklxvb', form.current, 'NL09kZCZYeYFmZSgt')
          .then((result) => {
              console.log(result.text);  
          }, (error) => {
              console.log(error.text);
          });

  }

  let contactValidationSchema=yup.object({
    name:yup.string().required("Please fill in your Name !"),
    email:yup.string().required("Please fill in Email !"),
    message:yup.string().required("Please Leave a Message !")
  })
    let {values,handleChange,handleBlur,errors}=useFormik({
      initialValues:{
        name:"",
        email:"",
        message:""
      },
      validationSchema:contactValidationSchema,
    })
    
<<<<<<< HEAD
=======
    useEffect(()=>{
      //observer 1
    const observer = new IntersectionObserver(entries => {
      // Loop over the entries
      entries.forEach(entry => {
        // If the element is visible
        if (entry.isIntersecting) {
          // Add the animation class
          entry.target.classList.add('contact-box-animation');
        }
      });
    });
    
    observer.observe(document.querySelector('.contact-box'));
    },[]);
>>>>>>> 45c4d5f (final _commit)

  return (
    <div className='row contact'>
      <div className='col contact-container'>
          <div className='contact-box'>
          <h2>Contact</h2>
            <form ref={form} onSubmit={sendMessage}>
            <div className='contact-inputs'>
            <TextField
              fullWidth 
              id="fullWidth"
              name="name"
              type="name"
              label="Enter Your Name"
              maxRows={4}
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div style={{color:"crimson"}}>{errors? errors.name:""}</div>
            </div>
            <div className='contact-inputs'>
            <TextField
              fullWidth 
              id="fullWidth"
              name="email"
              type="email"
              label="Enter Your Email"
              maxRows={4}
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div style={{color:"crimson"}}>{errors? errors.email:""}</div>
            </div>
            <div className='contact-inputs'>
            <TextField
              fullWidth 
              id="outlined-multiline-flexible"
              name="message"
              type="message"
              label="Message"
              multiline
              maxRows={5}
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div style={{color:"crimson"}}>{errors? errors.message:""}</div>
            </div>
            <Button
            variant="contained"
            endIcon={<SendIcon />}
            type="submit"
            >
              Send
            </Button>
            </form>
              
          </div>
      </div>
    </div>
  )
}

export default Contact