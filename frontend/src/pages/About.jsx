// src/pages/About.jsx
import { assets } from "@/assets/assets";
import React from "react";

const About = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 py-12">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="w-full">
          <img
            src={assets.about_image}
            alt="Doctors"
            className="rounded-2xl shadow-md"
          />
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            ABOUT <span className="text-gray-700">US</span>
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Welcome to Prescripto, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At Prescripto, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Prescripto is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you're booking your first appointment or managing
            ongoing care, Prescripto is here to support you every step of the
            way.
          </p>

          <h3 className="font-semibold text-lg mb-2">Our Vision</h3>
          <p className="text-gray-600 leading-relaxed">
            Our vision at Prescripto is to create a seamless healthcare
            experience for every user. We aim to bridge the gap between patients
            and healthcare providers, making it easier for you to access the
            care you need, when you need it.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          WHY <span className="text-gray-700">CHOOSE US</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition">
            <h4 className="font-semibold text-lg mb-2">EFFICIENCY:</h4>
            <p className="text-gray-600">
              Streamlined appointment scheduling that fits into your busy
              lifestyle.
            </p>
          </div>

          <div className="border rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition">
            <h4 className="font-semibold text-lg mb-2">CONVENIENCE:</h4>
            <p className="text-gray-600">
              Access to a network of trusted healthcare professionals in your
              area.
            </p>
          </div>

          <div className="border rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition">
            <h4 className="font-semibold text-lg mb-2">PERSONALIZATION:</h4>
            <p className="text-gray-600">
              Tailored recommendations and reminders to help you stay on top of
              your health.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
