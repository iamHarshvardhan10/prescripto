import { setError } from "@/redux/userSlice/userSlice";
import { AUTH_API } from "@/utils/apis";
import React, { useState } from "react";
import toast from "react-hot-toast";
import OTPInput from "react-otp-input";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
const VerifyOtp = () => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [Otp, setOtp] = useState("");

  console.log(Otp);

  const {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    phone_number,
    account_type,
  } = user;

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(AUTH_API.REGISTER, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
          confirmPassword: confirmPassword,
          phone_number: phone_number,
          otp: Otp,
          account_type: account_type,
        }),
      });

      const data = await res.json();
      console.log("RES", data);

      if (!res.ok) {
        setError(data.message);
        console.log(data.message);
        toast.error(data.message);
      }
      navigate("/");
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  return (
    <div className="max-w-[1200px] p-4 lg:p-8 flex items-center justify-center flex-col">
      <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]">
        Verify Email
      </h1>
      <p className="text-[1.125rem] leading-[1.625rem] my-4 text-richblack-100">
        A verification code has been sent to you. Enter the code below
      </p>
      <form onSubmit={handleVerifyOtp}>
        <OTPInput
          value={Otp}
          onChange={setOtp}
          numInputs={6}
          renderInput={(props) => (
            <input
              {...props}
              placeholder="-"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-[48px] lg:w-[60px] border-0 bg-gray-400 rounded-[0.5rem] text-white aspect-square text-center focus:border-0 focus:outline-2 focus:outline-yellow-50"
            />
          )}
          containerStyle={{
            justifyContent: "space-between",
            gap: "0 6px",
          }}
        />
        <button
          type="submit"
          className="w-full bg-blue-500 py-[12px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900"
        >
          Verify Email
        </button>
      </form>
      <div className="mt-6 flex items-center justify-between gap-10">
        <Link to="/sign">
          <p className="text-black border border-black px-4 py-2 rounded-xl flex items-center gap-x-2">
            Back To Signup
          </p>
        </Link>
        <button className="flex items-center text-blue-500 gap-x-2 border border-black rounded-xl px-4 py-2">
          Resend it
        </button>
      </div>
    </div>
  );
};

export default VerifyOtp;
