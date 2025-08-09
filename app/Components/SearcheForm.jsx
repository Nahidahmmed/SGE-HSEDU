'use client';

import React, { useState } from "react";
import { MagnifyingGlassIcon, GlobeAltIcon } from "@heroicons/react/24/outline";

// Sample program data
const studyPrograms = [
  { id: 1, name: "International Business" },
  { id: 2, name: "Computer Science" },
  { id: 3, name: "Mechanical Engineering" },
  { id: 4, name: "Artificial Intelligence" },
  { id: 5, name: "Marketing and Management" },
  { id: 6, name: "Psychology" },
  { id: 7, name: "Biomedical Sciences" },
  { id: 8, name: "Finance and Accounting" },
  { id: 9, name: "Economics" },
  { id: 10, name: "Law" },
  { id: 11, name: "Data Science" },
  { id: 12, name: "Architecture" },
  { id: 13, name: "Civil Engineering" },
  { id: 14, name: "Environmental Studies" },
  { id: 15, name: "Graphic Design" },
];

const SearcheForm = () => {
  const [query, setQuery] = useState("");
  const [filteredPrograms, setFilteredPrograms] = useState([]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 0) {
      const filtered = studyPrograms
        .filter((program) =>
          program.name.toLowerCase().includes(value.toLowerCase())
        )
        .slice(0, 5);
      setFilteredPrograms(filtered);
    } else {
      setFilteredPrograms([]);
    }
  };

  const handleOptionClick = (name) => {
    setQuery(name);
    setFilteredPrograms([]);
  };

  return (
    <div className="w-full max-w-6xl mx-auto rounded-2xl py-10 px-6 bg-gradient-to-r from-[#0644A6] to-[#0063E7] text-white shadow-lg">
      {/* Top Text */}
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
        <span className="font-bold">15 million</span> searches and counting
      </h2>

      {/* Search Form */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 px-5 relative">
        {/* Search Input with icon */}
        <div className="relative w-full md:flex-1">
          <div className="flex items-center bg-white rounded-[8px] px-3 py-2">
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="What would you like to study? (e.g., law)"
              className="w-full bg-transparent text-black placeholder-gray-500 focus:outline-none"
              value={query}
              onChange={handleSearchChange}
            />
          </div>

          {/* Autocomplete Dropdown */}
          {filteredPrograms.length > 0 && (
            <ul className="absolute top-full mt-1 w-full bg-white text-black rounded-[8px] shadow-md z-10 max-h-60 overflow-y-auto">
              {filteredPrograms.map((program) => (
                <li
                  key={program.id}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleOptionClick(program.name)}
                >
                  {program.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Country Select with icon */}
        <div className="flex items-center w-full md:w-1/3 bg-white rounded-[8px] px-3 py-[10px]">
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
