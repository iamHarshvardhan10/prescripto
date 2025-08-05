import React from "react";
import { specialityData } from "../../assets/assets";

const Speciality = () => {
  return (
    <div className="speciality-container flex items-center justify-center flex-col">
      <div>
        <h3>Find by Speciality</h3>
        <p>
          Simply browse through our extensive list of trusted doctors, schedule
          your appointment hassle free.
        </p>
      </div>
      <div className="flex items-center justify-center gap-3">
        {specialityData.map((item, index) => {
          return (
            <div key={index} className="my-10">
              <img src={item.image} alt={item.speciality} />
              <span>{item.speciality}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Speciality;
