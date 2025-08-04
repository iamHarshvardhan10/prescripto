import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, to }) => {
  return (
    <Link to={to}>
      <button className="btn btn-container">{text}</button>
    </Link>
  );
};

export default Button;
