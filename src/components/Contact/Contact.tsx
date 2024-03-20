import React from "react";
import "./Contact.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
const Contact: React.FC = () => {
  return (
    <div className="contact" id="contact">
      <h2 className="m-5">Contact</h2>
      <div className="d-flex  justify-content-center">
        <div className="nes-balloon nes-pointer img-fluid">
          <p className="mt-4">Have any questions?</p>
          <p>You can reach me easily by phone. My number is: +370 6757 6067</p>
          <div className="icon-list d-flex flex-column">
            <div className="d-flex align-items-center ">
              <a
                href="https://www.facebook.com/dmitrij.purynzin"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon"
              >
                <FontAwesomeIcon icon={faFacebook} size="3x" className="mx-5" />
              </a>
              <span className="nes-text">Dmitrij Purynzin</span>
            </div>
            <div className="d-flex align-items-center">
              <a
                href="https://github.com/darkeris345"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon"
              >
                <FontAwesomeIcon icon={faGithub} size="3x" className="mx-5" />
              </a>
              <span className="nes-text">darkeris345</span>
            </div>
            <div className="d-flex align-items-center">
              <a
                href="mailto:dmitrij.purynzin@gmail.com"
                className="contact-icon"
              >
                <FontAwesomeIcon icon={faEnvelope} size="3x" className="mx-5" />
              </a>
              <span className="nes-text">dmitrij.purynzin@gmail.com</span>
            </div>
            <div className="d-flex align-items-center">
              <a
                href="https://www.linkedin.com/in/dmitrij-purynzin/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon"
              >
                <FontAwesomeIcon icon={faLinkedin} size="3x" className="mx-5" />
              </a>
              <span className="nes-text">Dmitrij Purynzin</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
