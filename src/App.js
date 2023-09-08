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
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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
          <h1 className='my-name'>Rajesh Kumar.R</h1>
          <p id="job-descrep"><b>Full Stack Developer</b></p>
          <div className='header-contact'>
          <p id="contact-details"><MailIcon/> rajeshkumarlogu145@gmail.com</p>
          <p id="contact-details"><PhoneIphoneIcon/> +91 7092511841</p>
          <p id="contact-details">
          <a href='https://github.com/Raajulogu' 
            target='_blank' rel='noreferrer' className='git-btn'>
            <GitHubIcon fontSize='large'/>
          </a>
          <a href='https://www.linkedin.com/in/r-rajeshkumar/' 
            target='_blank' rel='noreferrer' className='linked-btn'>
            <LinkedInIcon fontSize='large'/>
          </a>
          </p>
          
          <br/>
          <p id="contact-details">
            <a href='https://drive.google.com/file/d/1fdX2pZ-HnrvnROtyH1ZVK65D5mFBpDtS/view' 
              target="_blank" rel="noreferrer"
              className='resume-container'>
              <button 
              className='resume-button'>
                Resume
              </button>
            </a>
          </p>
          
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
