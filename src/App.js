import './App.css';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import About from './components/about';
import Skills from './components/skills';
import Project from './components/project';
import Contact from './components/contact';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Education from './components/Education';
import GitHubIcon from '@mui/icons-material/GitHub';
<<<<<<< HEAD
=======
import { Button } from '@mui/material';
>>>>>>> 45c4d5f (final _commit)

function App() {
  return (
    <div className="container-fluid App">
      <div className='row'>
      <div className=" col App-header">
        <nav>
          <ul className='nav-bars'>
            <li className='navs'>
            <AnchorLink href='#about' className='anchor'>About me</AnchorLink>
            </li>
            <li className='navs'>
            <AnchorLink href='#skills' className='anchor'>Skills</AnchorLink>
            </li>
            <li className='navs'>
            <AnchorLink href='#education' className='anchor'>Education</AnchorLink>
            </li>
            <li className='navs'>
            <AnchorLink href='#project' className='anchor'>Project</AnchorLink>
            </li>
            <li className='navs'>
            <AnchorLink href='#contact' className='anchor'>Contact</AnchorLink>
            </li>
          </ul>
        </nav>
      </div>
      </div>
     <div className='row'>
     <div className='col header-content'>
        <div className='col-md-5 my-details'>
<<<<<<< HEAD
          <h1>Rajesh Kumar</h1>
          <p id="job-descrep">Looking for oppurtunites as <b>MERN Stack Developer</b></p>
=======
          <h1 className='my-name'>Rajesh Kumar</h1>
          <p id="job-descrep"><b>Full Stack Developer (MERN)</b></p>
>>>>>>> 45c4d5f (final _commit)
          <div className='header-contact'>
          <p id="contact-details"><MailIcon/> rajeshkumarlogu145@gmail.com</p>
          <p id="contact-details"><GitHubIcon/> https://github.com/Raajulogu</p>
          <p id="contact-details"><PhoneIphoneIcon/> +91 7092511841</p>
<<<<<<< HEAD
=======
          <br/>
          <a href='https://drive.google.com/file/d/1fdX2pZ-HnrvnROtyH1ZVK65D5mFBpDtS/view' 
            target="_blank" rel="noreferrer">
            <Button variant="contained">Resume</Button>
          </a>
>>>>>>> 45c4d5f (final _commit)
          </div>
        </div>
      </div>
     </div>
      <div className='main-content'>
        <section id="about"><About/></section>
        <section id="skills"><Skills/></section>
        <section id="education"><Education/></section>
        <section id="project"><Project/></section>
        <section id="contact"><Contact/></section>
      </div>
    </div>
  );
}

export default App;
