import React from "react";
import "./Contact.scss";
import image from "../../assets/pictures/man.png";

const Contact: React.FC = () => {
  return (
    <div className="contact" id="contact">
      <h2 className="m-5">Contact</h2>
      <div className="d-flex ">
        <img src={image} alt="dmitrij" style={{ width: "450px" }} />
        <p className="nes-balloon from-left nes-pointer">
          You can reach me easily by phone. My number is: +370 6757 6067
          <div className="icon-list d-flex flex-column">
            <div>
              <a
                href="https://www.facebook.com/dmitrij.purynzin"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon"
              >
                <i className="nes-icon facebook is-large"></i>
              </a>
              <span className="nes-text ml-2">Dmitrij Purynzin</span>
            </div>
            <div>
              <a
                href="https://github.com/darkeris345"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon"
              >
                <i className="nes-icon github is-large"></i>
              </a>
              <span className="nes-text ml-2">darkeris345</span>
            </div>
            <div>
              <a
                href="mailto:dmitrij.purynzin@gmail.com"
                className="contact-icon"
              >
                <i className="nes-icon gmail is-large"></i>
              </a>
              <span className="nes-text ml-2">dmitrij.purynzin@gmail.com</span>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/dmitrij-purynzin/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon"
              >
                <i className="nes-icon linkedin is-large"></i>
              </a>
              <span className="nes-text ml-2">Dmitrij Purynzin</span>
            </div>
          </div>
        </p>
      </div>
    </div>
  );
};

export default Contact;
