import React from "react";

const Project = (props) => {
  return (
    <>
      <div className="card" style={{ maxWidth: "44rem" }}>
        <div className="card-body">
          <h2 className="card-title">{props.name}</h2>
          <p className="card-text">
            {" "}
            Om mig Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat.
          </p>
          <a className="btn btn-outline-dark btn-lg" href="">
            gitHub
          </a>
          <a
            style={{ marginLeft: "10px" }}
            className="btn btn-primary btn-lg"
            href=""
          >
            Demo
          </a>
        </div>
      </div>
    </>
  );
};

export default Project;
