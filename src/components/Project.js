import React from "react";

const Project = (props) => {
  return (
    <>
      <div className="card" style={{ maxWidth: "44rem" }}>
        <div className="card-body">
          <h2 className="card-title">{props.name}</h2>
          <p className="card-text">{props.info}</p>
          <a className="btn btn-outline-dark btn-lg" href="/">
            gitHub
          </a>
          <a
            style={{ marginLeft: "10px" }}
            className="btn btn-primary btn-lg"
            href={props.demo}
          >
            Demo
          </a>
        </div>
      </div>
    </>
  );
};

export default Project;
