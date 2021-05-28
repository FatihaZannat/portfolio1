import React from 'react';
import  './Contact.css'
import emailjs from 'emailjs-com';
const Contact = () => {
   
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_jyirioj', 'template_c59hsx6', e.target, 'user_4hDPIEwJdnZIduDg4xo3P')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }
      
    return (
        
            <div >
            <h1 className="mb-4">Contact with me</h1>
            <form className="contact-form" onSubmit={sendEmail} >
              <div>
              <h3>Your Name</h3> 
            <input type="text" className="form-control " name="name" />
                  </div> 
                  <div>
              <h3>Your Email</h3> 
            <input type="text" className="form-control " name="email" />
                  </div> 
                  <div>
              <h3>Your Message</h3> 
                  <textarea rows="4"  className="form-control text-area" name="message" /> 
                  </div> 
            <br/>
           
            <input className='btn' type="submit" value="Send Message" /> 
            </form>
        </div>
       
    );
};

export default Contact;