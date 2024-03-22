import { Button } from "react-bootstrap";
import "./About.scss";
import pdf from "../../assets/resume/Dmitrij_Purynzin_resume.pdf";
import picture from "../../assets/pictures/skinmc-avatar.png";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About: React.FC = () => {

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="css-typing" id="about">
      <img src={picture} alt="avatar" className="avatar" data-aos="zoom-out" data-aos-duration="1500" data-aos-delay="1500" />
      <h5 className="mb-4" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="1500">Hello! My name is</h5>
      <div className="typewriter-container">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(3000)
              .typeString("Dmitrij Purynzin")
              
              .start();
          }}
        />
      </div>
      <h5 className="mt-4" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="1500">I'm a passionate Web Developer </h5>
      <Button
        className="nes-btn is-primary"
        style={{ marginTop: "20px" }}
        href={pdf}
        target="_blank"
        data-aos="zoom-out-up"
        data-aos-duration="1500"
        data-aos-delay="2500"
      >
        See My Resume
      </Button>
    </div>
  );
};

export default About;
