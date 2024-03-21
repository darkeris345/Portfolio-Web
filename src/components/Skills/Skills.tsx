import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaSass,
  FaBootstrap,
  FaDatabase
} from "react-icons/fa";
import { SiTypescript, SiNestjs, SiMysql } from "react-icons/si";
import "./Skills.scss";

const Skills: React.FC = () => {
  const skills = [
    { icon: <FaReact />, name: "React", progress: 65 },
    { icon: <SiTypescript />, name: "TypeScript", progress: 40 },
    { icon: <FaNodeJs />, name: "Node.js", progress: 65 },
    { icon: <FaHtml5 />, name: "HTML5", progress: 100 },
    { icon: <FaCss3Alt />, name: "CSS3", progress: 95 },
    { icon: <FaSass />, name: "Sass", progress: 85 },
    { icon: <FaJs />, name: "JavaScript", progress: 90 },
    { icon: <SiNestjs />, name: "Nest.js", progress: 30 },
    { icon: <FaBootstrap />, name: "Bootstrap", progress: 90 },
    { icon: <FaDatabase />, name: "MongoDB", progress: 60 },
    { icon: <SiMysql />, name: "MySQL", progress: 35 }
  ];

  const getProgressColor = (progress: number) => {
    if (progress >= 70) {
      return "is-success";
    } else if (progress >= 40) {
      return "is-warning";
    } else {
      return "is-primary";
    }
  };

  return (
    <div id="skills" className="mx-5 skills">
      <h2 className="skillsHeader">My Tech Stack</h2>
      <div className="icons-grid nes-balloon nes-pointer">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="icon">{skill.icon}</div>
            <div className="name">{skill.name}</div>
            <progress
              className={`nes-progress ${getProgressColor(skill.progress)}`}
              value={skill.progress}
              max="100"
            ></progress>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
