import React from "react";
import { assets } from "../../assets/assets";
import Button from "../common/Button";
const Navbar = () => {
  return (
    <nav className="nav-container flex items-center justify-between">
      <div className="">
        <img src={assets.logo} alt="" className="w-[150px] h-[100px]" />
      </div>
      <div className="flex items-center justify-between">
        <ul className="flex items-center justify-between gap-10">
          <li className="cursor-pointer text-md hover:text-blue-700 nav-links">
            Home
          </li>
          <li className="cursor-pointer text-md hover:text-blue-700 nav-links">
            All Doctors
          </li>
          <li className="cursor-pointer text-md hover:text-blue-700 nav-links">
            About
          </li>
          <li className="cursor-pointer text-md hover:text-blue-700 nav-links">
            Contact
          </li>
        </ul>
      </div>
      <div>
        <Button text={"Create Account"} to={"/sign"} />
      </div>
    </nav>
  );
};

export default Navbar;
