import React,{ useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import contactImg from "../../images/edit 14.jpg"
function Contact() {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_60zm02o', 'template_rhilhdn', form.current, 'WSijn1VLUMf9P2qz5')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
          
      });
      alert("Email successfully send");
  };
    return (
        
        <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Hire Me.</h1>
                            <p className="hire__text white">I am available for freelance work. Connect with me via phone:</p>
                           <p className="hire__text white"><strong>+947 72 93 60 31</strong> or email <strong>mshukry1998@gmail.com</strong></p>
                        </div>
                        <div className="input__box">
                        <form ref={form} onSubmit={sendEmail}>
                           <input type="text" className="contact name" placeholder="Your name *" name='name'/>
                           <input type="text" className="contact email" placeholder="Your Email *" name='email' />
                           <input type="text" className="contact subject" placeholder="Write a Subject" name='subject'/>
                           <textarea name="message" id='message' placeholder="Write Your message" />
                          
                           {/* <button className="btn contact pointer" type="submit" value="send">Submit</button> */}
                           <input type="submit" value="Submit"  className="btn contact pointer"/>
                           </form>
                        </div>
   
                    </div>
                </div>
                <div className="col__2">
                    <img src={contactImg} alt="" className="contact__img" />
                </div>
            </div>
        </div>
    );
}

export default Contact