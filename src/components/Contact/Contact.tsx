import React from "react";
import "./Contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const contactMethods = [
  {
    href: "https://www.facebook.com/dmitrij.purynzin",
    icon: faFacebook,
    text: "Dmitrij Purynzin",
  },
  {
    href: "https://github.com/darkeris345",
    icon: faGithub,
    text: "darkeris345",
  },
  {
    href: "mailto:dmitrij.purynzin@gmail.com",
    icon: faEnvelope,
    text: "dmitrij.purynzin@gmail.com",
  },
  {
    href: "https://www.linkedin.com/in/dmitrij-purynzin/",
    icon: faLinkedin,
    text: "Dmitrij Purynzin",
  },
];

const Contact: React.FC = () => {
  return (
    <div className="contact" id="contact">
      <h2 className="m-5">Contact</h2>
      <div className="d-flex justify-content-center">
        <div className="nes-balloon nes-pointer img-fluid">
          <p className="mt-4">Have any questions?</p>
          <p>You can reach me easily by phone. My number is: +370 6757 6067</p>
          <div className="icon-list d-flex flex-column">
            {contactMethods.map((method, index) => (
              <div key={index} className="d-flex align-items-center">
                <a
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-icon"
                >
                  <FontAwesomeIcon
                    icon={method.icon}
                    size="3x"
                    className="mx-5 my-3"
                  />
                </a>
                <span className="nes-text">{method.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
