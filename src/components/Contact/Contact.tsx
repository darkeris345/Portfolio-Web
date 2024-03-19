import React from "react";
import "./Contact.scss";

const Contact: React.FC = () => {
  return (
    <div className="contact text-center" id="contact">
      <h2>Contact</h2>
      <div className="icon-list d-flex justify-content-center">
        <a
          href="https://www.facebook.com/dmitrij.purynzin"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
        >
          <i className="nes-icon facebook is-large"></i>
        </a>
        <a
          href="https://github.com/darkeris345"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
        >
          <i className="nes-icon github is-large"></i>
        </a>
        <a href="mailto:dmitrij.purynzin@gmail.com" className="contact-icon">
          <i className="nes-icon gmail is-large"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/dmitrij-purynzin/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
        >
          <i className="nes-icon linkedin is-large"></i>
        </a>
      </div>
    </div>
  );
};

export default Contact;
