import React from "react";

const FlashCard = (props) => {
  return (
    <div
      className="card card-body cardParser"
      style={{ width: "32rem", fontSize: "23px" }}
    >
      {props.text}
    </div>
  );
};

export default FlashCard;
