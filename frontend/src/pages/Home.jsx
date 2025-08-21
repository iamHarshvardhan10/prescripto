import React from "react";
import { assets } from "../assets/assets";
import Button from "../components/common/Button";
import Speciality from "../components/core/Speciality";
import TopDoctors from "../components/core/TopDoctors";

const Home = () => {
  return (
    <>
      <div className="home-container  relative rounded-4xl">
        <div className="home-r-side absolute top-[30%] w-[45%] left-16 capitalize">
          <h3 className="text-[54px] font-bold text-[#fff] leading-14">
            Book Appointment with Trusted Doctors
          </h3>
          <div className="flex items-center justify-center m-15">
            <img src={assets.group_profiles} alt="" />
            <span className="text-[#fff] text-[16px] ml-8 span-container">
              Simply browse through our extensive list of trusted doctors
              schedule your Appointment hassle-free.
            </span>
          </div>
          <Button text={"Book Appointment"} className={"white-btn"} />
        </div>
        <div className="home-l-side absolute right-10 bottom-0">
          <img src={assets.header_img} alt="" className="w-[600px] h-auto" />
        </div>
      </div>

      {/* SPECIALITY  */}
      <Speciality />

      {/* TOP DOCTORS */}
      <TopDoctors />
    </>
  );
};

export default Home;
