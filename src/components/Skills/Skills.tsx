import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaSass,
} from "react-icons/fa";
import { SiTypescript, SiNestjs } from "react-icons/si";
import "./Skills.scss";

const Skills: React.FC = () => {
  return (
    <div
      id="skills"
      className="m-5 skills"
    >
      <h2 className="mb-5">My Tech Stack</h2>
      <div className="icons-grid nes-balloon nes-pointer img-fluid">
        <FaReact />
        <SiTypescript />
        <FaNodeJs />
        <FaHtml5 />
        <FaCss3Alt />
        <FaSass />
        <FaJs />
        <SiNestjs />
      </div>
    </div>
  );
};

export default Skills;
