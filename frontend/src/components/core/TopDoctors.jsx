import React from "react";
import { doctors } from "../../assets/assets";

const TopDoctors = () => {
  return (
    <div>
      <div className="flex items-center justify-center flex-col my-12 text-center">
        <h3 className="text-[24px] font-semibold">Top Doctors to Book</h3>
        <p className="text-gray-600">
          Simply browse through our extensive list of trusted doctors.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-8">
        {doctors.map((docs) => (
          <div
            key={docs._id}
            className="flex flex-col items-center border rounded-xl shadow-sm p-4 hover:shadow-md transition"
          >
            <div className="w-full h-[210px] overflow-hidden rounded-lg">
              <img
                src={docs.image}
                alt={docs.name}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-green-600 bg-green-100 rounded-full py-1 px-4 border border-green-500 mt-4 text-sm">
              Available
            </span>
            <p className="mt-2 font-medium text-lg">{docs.name}</p>
            <p className="text-gray-500 text-sm">{docs.speciality}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopDoctors;
