import React from 'react';
import aboutImg from '../../image/IMG_20200128_201841-removebg-preview.png'
import './About.css'

const About = () => {
    return (
        
        <div>
            <hr />
            <h1 >About me</h1>
            <img className='aboutPic' src={aboutImg} alt=""/>
            <div>
                <h1>I am Fatiha Zannat</h1>
               <p> 
            I am an enthusiastic JavaScript developer with knowing some framework<br/> for the frontend and the backend. 
        .  I always focus on learning new technology. <br/>
        I was studied  University of Rajshahi.
            </p>
        </div>


        <div className='row d-flex justify-content-around skill-section'>

       <div className=" ">
       <h2 className="skill col-md-6">My Skill</h2>
      <ul><li>Expertise:</li></ul>
       <span>React js</span>  <span>React Router</span>  <span>React Bootstrap</span>
       <span>HTML5</span> <br /> <span>CSS3</span>  <span> Bootstrap</span> <span>JavaScript (ES6)</span>
       
       <ul><li>Comfortable:</li></ul>
       <span>Node</span>  <span>Express</span>  <span>Redux</span>
       <span>MongoDB</span>

       <ul><li>Tools & Softwares:</li></ul>
       <span>git</span>  <span>VS Code</span>  <span>Chrome Dev Tools</span> <br />
       <span>Heroku</span>  <span>Netlify</span>  <span>Firebase</span>
      
       <ul><li>Expertise:</li></ul>
       <span>React js</span>  <span>React js</span>  <span>React js</span>
      
      
      
      
      
       </div>

        <div>
        <h2 className="education col-md-6">My Education</h2>
        <ul><li>Expertise:</li></ul>
       <span>React js</span>  <span>React js</span>  <span>React js</span>
       <ul><li>Expertise:</li></ul>
       <span>React js</span>  <span>React js</span>  <span>React js</span>
       <ul><li>Expertise:</li></ul>
       <span>React js</span>  <span>React js</span>  <span>React js</span>
      
        </div>
        </div>
            

</div>
    );
};

export default About;