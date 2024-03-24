import React from "react";

const Sort = ({ handleSort }) => {
  return (
    <div className="flex w-full justify-between border border-gray-300 ">
      <div className="px-4 py-2 border-r border-gray-300">
        <span className="text-sm font-medium">Sort By</span>
      </div>
      <button
        className="px-4 py-2 border-r border-gray-300 text-sm font-medium hover:bg-gray-100 focus:outline-none focus:ring-2 "
        onClick={() => handleSort("total")}
      >
        Twubric Score
      </button>
      <button
        className="px-4 py-2 border-r border-gray-300 text-sm font-medium hover:bg-gray-100 focus:outline-none focus:ring-2"
        onClick={() => handleSort("friends")}
      >
        Friends
      </button>
      <button
        className="px-4 py-2 border-r border-gray-300 text-sm font-medium hover:bg-gray-100 focus:outline-none focus:ring-2 "
        onClick={() => handleSort("influence")}
      >
        Influence
      </button>
      <button
        className="px-4 py-2 text-sm font-medium hover:bg-gray-100 focus:outline-none focus:ring-2 "
        onClick={() => handleSort("chirpiness")}
      >
        Chirpiness
      </button>
    </div>
  );
};

export default Sort;
