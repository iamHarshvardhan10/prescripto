import { assets } from "@/assets/assets";
import React from "react";

const Contact = () => {
  return (
    <div className="px-6 md:px-20 py-16">
      <h2 className="text-center text-2xl md:text-3xl font-semibold mb-12">
        CONTACT <span className="text-gray-700 font-bold">US</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src={assets.contact_image}
            alt="Doctor with patient"
            className="rounded-lg shadow-md"
          />
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">OUR OFFICE</h3>
            <p className="text-gray-600">
              00000 Willms Station <br />
              Suite 000, Washington, USA
            </p>
            <p className="text-gray-600 mt-2">
              Tel: (000) 000-0000 <br />
              Email: greatstackdev@gmail.com
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">
              CAREERS AT PRESCRIPTO
            </h3>
            <p className="text-gray-600 mb-4">
              Learn more about our teams and job openings.
            </p>
            <button className="px-6 py-2 border border-black rounded-md hover:bg-black hover:text-white transition duration-300">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
