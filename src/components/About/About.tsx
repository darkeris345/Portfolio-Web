import { Button } from "react-bootstrap";
import "./About.scss";
import pdf from "../../assets/resume/Dmitrij_Purynzin_resume.pdf";

const About: React.FC = () => {
  return (
    <div className="css-typing m-5">
      <h5 className="mb-4" >Hello! My name is</h5>
      <h3 className="css-typing-text mb-4" >Dmitrij Purynzin</h3>
      <h5 className="" >I'm a JavaScript developer. </h5>
      <Button className="nes-btn is-primary" style={{ marginTop: "20px" }} href={pdf} target="_blank">See My Resume</Button>
    </div>
  );
};

export default About;
