import React from "react";
import "../dist/css/Projects.css";
import { FcBriefcase } from "react-icons/fc";

const Projects = () => {
  return (
    <div className="card" id="projects">
      <div className="card-container">
        <div className="card-header" id="projects-header">
          <FcBriefcase style={{ fontSize: "200px" }}></FcBriefcase>
        </div>
        <div className="card-body" id="projects-body">
          <h1 className="card-title">Portfolio</h1>
          <p className="card-text">
            {" "}
            Om mig Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat.
          </p>
          <div>
            <a href="/projects" className="btn btn-outline-dark btn-lg">
              Portfolio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
