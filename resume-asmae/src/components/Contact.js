import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub, faFacebook, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faPhone, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import {useRef} from 'react';
// import emailjs from '@emailjs/browser';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3i7q051', 'template_s5qnzva', form.current, 'zEuqMoOfq9qnSVakE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset( )
  };
  return (
    <div id="contact">
      <div className="container">
        <div className="row">
          <div className="contact-left">
            <h1 className="sub-title">Contact Me</h1>
            <p><FontAwesomeIcon icon={faPaperPlane}/> amouradi2002@gmail.com</p>
            <p><FontAwesomeIcon icon={faPhone}/>+212 668661680</p>
            <div className="social-icons">
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/asmaemouradi/">
                <FontAwesomeIcon icon={faLinkedin}/>
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.facebook.com/aya.andaloussi.9/">
              <FontAwesomeIcon icon={faFacebook}/>
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/asmae__mouradi/">
              <FontAwesomeIcon icon={faInstagram}/>
              </a>
              <a target="_blank" rel="noreferrer" href="https://github.com/asmaemou">
              <FontAwesomeIcon icon={faGithub}/>
              </a>
            </div>
            <a href="./my-cv.pdf" target="_blank" download className="btn btn2">Download CV</a>
          </div>
          <div className="contact-right">
            <form ref={form} onSubmit={sendEmail} name="submit-to-google-sheet">
              <input type="text" name="name" placeholder="Your name" required />
              <input type="email" name="email" placeholder="Your email" required />
              <textarea name="message" rows="6" placeholder="Message"></textarea>
              <button type="submit" className="btn btn2">Submit</button>
            </form>
            <span id="msg"></span>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; Asmae_Mouradi</p>
      </div>
    </div>
  );
};

export default Contact;
