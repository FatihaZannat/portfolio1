import React from 'react';
import './Home.css' 
import Typed from 'react-typed';

import img from '../../../image/portfolioIMG.png'


import Projects from '../../Project\'s/Projects';
import About from '../../About/About';
import Contact from '../../Contact/Contact';

const Home = () => {
    return (
        
        <div>
         
          <div className="home">
          <div className="row mb-3" >
          <div className='col-md text-center'>
          <h2>Hi, I am</h2>
            <h2 style={{color: '#0ab7b7'}}><b>Fatiha Zannat</b></h2>
            <Typed className='typed-text'
            strings={["Front End Developer", 'Web Developer', 'Web Design']}
            typeSpeed={60}
            backSpeed={60}
            loop
          />
            
            <p>I am an enthusiastic JavaScript developer <br/> with Knowing some Framework for the <br/> frontend and the backend.</p>
            <a className="hyperLink" href="https://drive.google.com/file/d/1AFYC3xgHoOfdfjitJHQZSV5oSRC-ymeE/view" download="proposed_file_name" target="blank">Download Resume</a><br/><br/>
            <a className="hyperLink" href="https://www.linkedin.com/in/fatiha-zannat-7b5aa5202/" target="blank">Hire Me</a>
          </div>
          
          <div className='col-md' >
              <img style={{padding:'10px'}} src={img} alt=""/>
          </div>
          </div>
          </div>
            <About></About>
            <Projects></Projects>
            <Contact></Contact>
        </div>
        
    );
};

export default Home;