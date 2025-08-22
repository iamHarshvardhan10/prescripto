import React from "react";
import { assets } from "../../assets/assets";
import Button from "../common/Button";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="nav-container flex items-center justify-between">
      <div className="">
        <img src={assets.logo} alt="" className="w-[150px] h-[100px]" />
      </div>
      <div className="flex items-center justify-between">
        <ul className="flex items-center justify-between gap-10">
          <li className="cursor-pointer text-md hover:text-blue-700 nav-links">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="cursor-pointer text-md hover:text-blue-700 nav-links">
            <Link to={"/all-doctors"}>All Doctors</Link>
          </li>
          <li className="cursor-pointer text-md hover:text-blue-700 nav-links">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="cursor-pointer text-md hover:text-blue-700 nav-links">
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
      <div>
        <Button
          text={"Create Account"}
          to={"/sign"}
          className={"btn btn-container"}
        />
      </div>
    </nav>
  );
};

export default Navbar;
