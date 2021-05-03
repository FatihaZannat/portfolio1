import React from 'react';
import  './Contact.css'

const Contact = () => {
   
    return (
        <div>
            <form className="contact-form" >
                
            <input type="hidden" name="contact_number" /> <br/>
            <label>Name</label> 
            <input type="text" name="user_name" /><br/>
            <label>Email</label> 
            <input type="email" name="user_email" /><br/>
            <label style={{marginRight:'25px'}}>Message</label>
            <textarea name="message" /> <br/>
            <input className='btn btn-dark' type="submit" value="Send" /> 
    </form>
        </div>
    );
};

export default Contact;