import React from "react";
import "../dist/css/Projects.css";
import { FcBriefcase } from "react-icons/fc";

const Projects = () => {
  return (
    <div className="card" id="projects">
      <div
        style={{
          flexDirection: "row-reverse",
        }}
        className="card-container"
      >
        <div className="card-header" id="projects-header">
          <FcBriefcase style={{ fontSize: "95px" }}></FcBriefcase>
        </div>
        <div className="card-body" id="projects-body">
          <h2 class="card-title">Portfolio</h2>
          Om mig Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
      </div>
    </div>
  );
};

export default Projects;
