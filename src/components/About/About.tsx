import { Button } from "react-bootstrap";
import "./About.scss";
import pdf from "../../assets/resume/Dmitrij_Purynzin_resume.pdf";
import picture from "../../assets/pictures/skinmc-avatar.png";
import Typewriter from "typewriter-effect";

const About: React.FC = () => {
  return (
    <div className="css-typing m-5" id="about">
      <img src={picture} alt="avatar" className="avatar" />
      <h5 className="mb-4">Hello! My name is</h5>
      <div className="typewriter-container">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Dmitrij Purynzin")
              .start();
          }}
        />
      </div>
      <h5 className="mt-4">I'm a passionate Web Developer </h5>
      <Button
        className="nes-btn is-primary"
        style={{ marginTop: "20px" }}
        href={pdf}
        target="_blank"
      >
        See My Resume
      </Button>
    </div>
  );
};

export default About;
