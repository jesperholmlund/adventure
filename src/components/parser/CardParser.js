import React, { useState } from "react";
import { FcCallback } from "react-icons/fc";
import "../../dist/css/Parser.css";

const CardParser = (props) => {
  const handleClick = () => {
    const value = props.text;
    //setCardStack((cardStack) => [...cardStack, value]);
    props.callBack(value);
  };
  return (
    <div
      className="card-body cardParser"
      style={{ maxWidth: "24rem" }}
      onClick={handleClick}
      dangerouslySetInnerHTML={{ __html: props.text }}
    ></div>
  );
};
export default CardParser;
