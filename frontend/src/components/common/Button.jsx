import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, to, className }) => {
  return (
    <Link to={to}>
      <button className={`${className}`}>{text}</button>
    </Link>
  );
};

export default Button;
