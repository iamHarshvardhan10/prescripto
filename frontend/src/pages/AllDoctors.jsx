import { doctors } from "@/assets/assets";
import React from "react";

const categories = [
  "General physician",
  "Gynecologist",
  "Dermatologist",
  "Pediatricians",
  "Neurologist",
  "Gastroenterologist",
];

const AllDoctors = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
      <h2 className="text-xl font-semibold mb-6">
        Browse through the doctors specialist.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 space-y-3">
          <button className="block w-full text-left px-4 py-2 rounded-md border">
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              className="block w-full text-left px-4 py-2 rounded-md border "
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doc) => (
            <div
              key={doc.id}
              className="border rounded-xl shadow-sm overflow-hidden hover:shadow-md transition"
            >
              <img
                src={doc.image}
                alt={doc.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <span
                  className={`text-sm font-medium ${
                    doc.available ? "text-green-600" : "text-red-600"
                  }`}
                >
                  ● {doc.available ? "Available" : "Not Available"}
                </span>
                <h3 className="mt-2 text-lg font-semibold">{doc.name}</h3>
                <p className="text-gray-600">{doc.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllDoctors;
