import React, { useEffect } from 'react';
import "./project.css";
import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

const Project = () => {

  useEffect(()=>{
    //observer 1
  const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('card-1-animation');
      }
    });
  });
  
  observer.observe(document.querySelector('.card-1'));

  //observer 2
  const observer_2 = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('card-1-animation');
      }
    });
  });
  observer_2.observe(document.querySelector('.card-2'));
  
  //observer 3
  const observer_3 = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('card-2-animation');
      }
    });
  });
  observer_3.observe(document.querySelector('.card-3'));
  
  //observer 4
  const observer_4 = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('card-2-animation');
      }
    });
  });
  
  observer_4.observe(document.querySelector('.card-4'));

   //observer 5
   const observer_5 = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('card-1-animation');
      }
    });
  });
  
  observer_5.observe(document.querySelector('.card-5'));

  //observer 6
  const observer_6 = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('card-2-animation');
      }
    });
  });
  
  observer_6.observe(document.querySelector('.card-6'));

  },[]);


  return (
    <div className='row project'>
      <div className='col project-title'>
        <div className='project-head'>
          <h1>Projects</h1>
        </div>
      </div>
      <div className='row project-body'>
        
        <Card sx={{ maxWidth: 345 }} className='card-1'>
          <CardActionArea>
            <img id='project-img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Mail_%28iOS%29.svg/640px-Mail_%28iOS%29.svg.png"
        alt="img" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              <b>Your Mailer</b>
              </Typography>
              <Typography variant="body2" className='card-content'>
              &emsp;&emsp;Here you can send <b>Emails</b> to a large group of recipients at a time. 
                You can send your email by manually entering your email address or 
                uploading a CSV file. You can send email delays by using Delay Option. 
                The delay value should be in <b>seconds</b>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className='card-actions'>
            <div className='proj-git-btn'>
              <a href='https://github.com/Raajulogu/Your_Mailer_Frontend' 
              target="_blank" className='project-icons' rel="noreferrer">
                <GitHubIcon/>
                <p>Frontend</p>
              </a>
              <a href='https://github.com/Raajulogu/Your_Mailer_Backend' 
              target="_blank" className='project-icons' rel="noreferrer">
                <GitHubIcon/>
                <p>Backend</p>
              </a>
              
            </div>
            <a href='https://stately-zuccutto-ff4067.netlify.app/' 
            target="_blank" className='project-icons' rel="noreferrer">
            <LanguageIcon/>
            </a>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }} className='card-2'>
          <CardActionArea>
            <img id='project-img' src="data:image/png;base64,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"
        alt="img" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              <b>Stack Overflow</b>
              </Typography>
              <Typography variant="body2" className='card-content'>
              &emsp;&emsp;The forum, where you can ask your programming-based doubts, and 
                post your Answers for others developers doubts, and also you 
                can check regular job updates from the companies in the Company 
                section.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className='card-actions'>
            <div className='proj-git-btn'>
                <a href='https://github.com/Raajulogu/Stack_Overflow_Frontend' 
                target="_blank" className='project-icons' rel="noreferrer">
                  <GitHubIcon/>
                  <p>Frontend</p>
                </a>
                <a href='https://github.com/Raajulogu/stack_overflow-clone' 
                target="_blank" className='project-icons' rel="noreferrer">
                  <GitHubIcon/>
                  <p>Backend</p>
                </a>
                
              </div>
              <a href='https://meek-cucurucho-834c54.netlify.app/' 
              target="_blank" className='project-icons' rel="noreferrer">
              <LanguageIcon/>
              </a>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }} className='card-3'>
          <CardActionArea>
            <img id='project-img' src="https://mspeducare.com/public/images/Component%2023%20%E2%80%93%201@2x.png"
        alt="img" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              <b>Student & Teacher Management System</b>
              </Typography>
              <Typography variant="body2" className='card-content'>
              &emsp;&emsp;A application where you can find students data's and add a new student data data 
              and also able to edit and remove a student data's. Here you can also add, edit a 
              teacher's data's.  
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className='card-actions'>
            <div className='proj-git-btn'>
              <a href='https://github.com/Raajulogu/Student_Teacher_frontend' 
              target="_blank" className='project-icons' rel="noreferrer">
                <GitHubIcon/>
                <p>Frontend</p>
              </a>
              <a href='https://github.com/Raajulogu/Student_Teacher_backend' 
              target="_blank" className='project-icons' rel="noreferrer">
                <GitHubIcon/>
                <p>Backend</p>
              </a>
              
            </div>
            <a href='https://verdant-gumdrop-f51934.netlify.app/' 
            target="_blank" className='project-icons' rel="noreferrer">
            <LanguageIcon/>
            </a>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }} className='card-4'>
          <CardActionArea>
            <img id='project-img' src="https://neetable.com/img/solutions/food-delivery-app-development/food-delivery-banner.png"
        alt="img" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              <b>Dine In</b>
              </Typography>
              <Typography variant="body2" className='card-content'>
              &emsp;&emsp;Dine In is a food delivery app, here you can search for foods what ever you want 
              and add the foods to the cart. After adding the the foods to the cart you can checkout 
              your foods. You can see your previous ordered foods in the orders section.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className='card-actions'>
            <div className='proj-git-btn'>
              <a href='https://github.com/Raajulogu/DineIn_Frontend' 
              target="_blank" className='project-icons' rel="noreferrer">
                <GitHubIcon/>
                <p>Frontend</p>
              </a>
              <a href='https://github.com/Raajulogu/DineIn_Backend' 
              target="_blank" className='project-icons' rel="noreferrer">
                <GitHubIcon/>
                <p>Backend</p>
              </a>
              
            </div>
            <a href='https://boisterous-lollipop-123e69.netlify.app/' 
            target="_blank" className='project-icons' rel="noreferrer">
            <LanguageIcon/>
            </a>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }} className='card-5'>
          <CardActionArea>
            <img id='project-img' src="https://i.pinimg.com/originals/35/1e/f4/351ef4059d24b19c70d1cfe10901948e.jpg"
        alt="img" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              <b>Recipe Keeper</b>
              </Typography>
              <Typography variant="body2" className='card-content'>
              &emsp;&emsp;"Recipe Keeper" is a user-friendly recipe book application that empowers users to
               discover, and organize their favorite recipes. Whether you're a seasoned chef or a kitchen novice,
                this app provides a platform to post, explore, and enhance your culinary skills.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className='card-actions'>
            <div className='proj-git-btn'>
              <a href='https://github.com/Raajulogu/Recipe_Keeper_frontend' 
              target="_blank" className='project-icons' rel="noreferrer">
                <GitHubIcon/>
                <p>Frontend</p>
              </a>
              <a href='https://github.com/Raajulogu/recipe_keeper_backend' 
              target="_blank" className='project-icons' rel="noreferrer">
                <GitHubIcon/>
                <p>Backend</p>
              </a>
              
            </div>
            <a href='https://recipe-keeper-by-rk.netlify.app/' 
            target="_blank" className='project-icons' rel="noreferrer">
            <LanguageIcon/>
            </a>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }} className='card-6'>
          <CardActionArea>
            <img id='project-img' src="https://www.softsuave.com/blog/wp-content/uploads/2021/03/Matrimony-mobile-app-screens.png"
        alt="img" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              <b>Mangalyam Matrimony</b>
              </Typography>
              <Typography variant="body2" className='card-content'>
              &emsp;&emsp;Discover love with Mangalyam Matrimony, where personalized 
              profiles and effortless connection requests bring hearts together. Our 
              streamlined platform prioritizes privacy, letting users curate meaningful 
              connections and delete accounts post-marriage. Join us for a journey where 
              your perfect match is just a click away. Mangalyam Matrimony - crafting lasting 
              connections for a lifetime of happiness.  
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className='card-actions'>
            <div className='proj-git-btn'>
              <a href='https://github.com/Raajulogu/mangalyam_frontend_app' 
              target="_blank" className='project-icons' rel="noreferrer">
                <GitHubIcon/>
                <p>Frontend</p>
              </a>
              <a href='https://github.com/Raajulogu/Matrimony_Backend' 
              target="_blank" className='project-icons' rel="noreferrer">
                <GitHubIcon/>
                <p>Backend</p>
              </a>
              
            </div>
            <a href='https://mangalyam-matrimony-rk.netlify.app/' 
            target="_blank" className='project-icons' rel="noreferrer">
            <LanguageIcon/>
            </a>
          </CardActions>
        </Card>
      </div>
    </div>
  )
}

export default Project

