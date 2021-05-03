import React from 'react';
import './Home.css' 
import Typed from 'react-typed';

import img from '../../../image/IMG_20200128_201841-removebg-preview.png'

import Services from '../../Services/Services';
import Projects from '../../Project\'s/Projects';

const Home = () => {
    return (
        
        <div >
         
          <div className="home">
          <div>
          <h2>Hi, I am</h2>
            <h2 style={{color: '#0ab7b7'}}><b>Fatiha Zannat</b></h2>
            <Typed className='typed-text'
            strings={["Front End Developer", 'Web Developer', 'Web Design']}
            typeSpeed={40}
            backSpeed={60}
            loop
          />
            
            <p>I am an enthusiastic JavaScript developer <br/> with Knowing some Framework for the <br/> frontend and the backend.</p>
            <a href="https://drive.google.com/file/d/1AFYC3xgHoOfdfjitJHQZSV5oSRC-ymeE/view" download="proposed_file_name">Download Resume</a>
            
          </div>
          
          <div>
              <img style={{padding:'20px'}} src={img} alt=""/>
          </div>
          </div>
          
            <Services></Services>
            <Projects></Projects>
        </div>
        
    );
};

export default Home;