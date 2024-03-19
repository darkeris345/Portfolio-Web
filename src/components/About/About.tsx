import { Button } from "react-bootstrap";
import "./About.scss";

const About: React.FC = () => {
  return (
    <div className="css-typing m-5">
      <h5 className="" >Hello! My name is</h5>
      <h3 className="css-typing-text" >Dmitrij Purynzin</h3>
      <h5 className="" >I'm a Full Stack Developer</h5>
      <Button className="btn btn-outline" href="../../public/resume/Dmitrij_Purynzin_Resume.pdf" target="_blank">See My Resume</Button>
    </div>
  );
};

export default About;
