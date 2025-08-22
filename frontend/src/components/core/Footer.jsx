import React from "react";
import Button from "../common/Button";
import { assets } from "@/assets/assets";

const Footer = () => {
  return (
    <>
      <div className="bg-[#5865F2] rounded-xl flex flex-col md:flex-row items-center justify-between md:px-16 my-4">
        <div className="text-white max-w-lg space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Book Appointment <br /> With 100+ Trusted Doctors
          </h2>
          <button className="bg-white text-[#5865F2] font-medium px-6 py-2 rounded-full shadow hover:bg-gray-100 transition">
            Create account
          </button>
        </div>

        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src={assets.appointment_img}
            alt="Doctor"
            className="w-full max-w-sm object-contain"
          />
        </div>
      </div>
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <img
                src={assets.logo}
                alt="Prescripto Logo"
                className="w-[180px] h-auto"
              />
            </div>
            <p className="text-gray-600 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">COMPANY</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  Delivery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">GET IN TOUCH</h3>
            <p className="text-gray-600">+0-000-000-000</p>
            <p className="text-gray-600">greatstackdev@gmail.com</p>

            {/* Optional Social Icons
            <div className="flex space-x-4 mt-4 text-gray-600">
              <a href="#" className="hover:text-blue-600">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-blue-400">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-blue-700">
                <FaLinkedinIn />
              </a>
            </div> */}
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-200 py-4 text-center text-sm text-gray-600">
          Copyright © 2024 @ Greatstack.dev - All Rights Reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
