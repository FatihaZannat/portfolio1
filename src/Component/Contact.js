import React from 'react';
// import emailjs from 'emailjs-com';

const Contact = () => {
   
    return (
        <div>
              <form className="contact-form" >
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
        </div>
    );
};

export default Contact;