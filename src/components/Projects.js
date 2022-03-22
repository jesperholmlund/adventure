import React from "react";
import "../dist/css/Projects.css";
import { FcBriefcase } from "react-icons/fc";
import { NavLink } from "react-router-dom";

const Projects = () => {
  return (
    <div className="card" id="projects">
      <div className="card-container">
        <div className="" id="projects-header">
          <FcBriefcase style={{ fontSize: "200px" }}></FcBriefcase>
        </div>
        <div className="card-body" id="projects-body">
          <h1 className="card-title">Projektlista</h1>
          <p className="card-text">
            {" "}
            Är du intresserad av att veta vad jag håller på med kan du gå till
            min lista av projekt och bilda dig en uppfattning om min kunskap
          </p>
          <div>
            <NavLink to="/projects" className="btn btn-outline-dark btn-lg">
              Projektlista
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
