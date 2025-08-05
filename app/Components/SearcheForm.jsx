import React from "react";
import { MagnifyingGlassIcon, GlobeAltIcon } from "@heroicons/react/24/outline";

const SearcheForm = () => {
  return (
    <div className="w-full max-w-6xl mx-auto rounded-2xl py-10 px-6 bg-gradient-to-r from-[#0644A6] to-[#0063E7] text-white shadow-lg">
      {/* Top Text */}
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
        <span className="font-bold">15 million</span> searches and counting
      </h2>

      {/* Search Form */}
      <div className="flex flex-col md:flex-row items-center gap-4 px-5">
        {/* Search Input with icon */}
        <div className="flex items-center w-full md:flex-1 bg-white rounded px-3 py-2">
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="What would you like to study? (e.g., law)"
            className="w-full bg-transparent text-black placeholder-gray-500 focus:outline-none"
          />
        </div>

        {/* Country Select with icon */}
        <div className="flex items-center w-full md:w-1/3 bg-white rounded px-3 py-2">
          <GlobeAltIcon className="w-5 h-5 text-gray-500 mr-2" />
          <select className="w-full bg-transparent text-black focus:outline-none">
            <option value="canada">Canada</option>
            <option value="uk">United Kingdom</option>
            <option value="usa">United States</option>
            <option value="australia">Australia</option>
          </select>
        </div>

        {/* Search Button */}
        <button className="w-full md:w-auto bg-white text-[#3985e7] font-semibold px-8 py-2 rounded hover:bg-gray-100 transition">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearcheForm;
