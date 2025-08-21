import React from "react";
import { specialityData } from "../../assets/assets";

const Speciality = () => {
  return (
    <div className="speciality-container flex items-center justify-center flex-col">
      <div className="text-center mt-8 flex items-center justify-center flex-col">
        <h3 className="text-[24px] font-semibold">Find by Speciality</h3>
        <p className="text-center w-[80%]">
          Simply browse through our extensive list of trusted doctors, schedule
          your appointment hassle free.
        </p>
      </div>
      <div className="flex items-center justify-center gap-3">
        {specialityData.map((item, index) => {
          return (
            <div
              key={index}
              className="my-10 mx-50 flex items-center justify-center flex-col cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.speciality}
                className="w-[75px] height-[75px]"
              />
              <span className="text-center mt-2">{item.speciality}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Speciality;
