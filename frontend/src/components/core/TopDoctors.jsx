import React from "react";
import { doctors } from "../../assets/assets";

const TopDoctors = () => {
  return (
    <div>
      <div>
        <h3>Top Doctors to Book</h3>
        <p>Simply browse through our extensive list of trusted doctors.</p>
      </div>
      <div>
        {doctors.map((docs) => {
          return (
            <div key={docs._id}>
              <div>
                <img src={docs.image} alt="" />
                <p>{docs.name}</p>
                <p>{docs.speciality}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopDoctors;
