import React from "react";
import { MdSearch } from "react-icons/md";

const SearchBar = ({ setSearch }) => {
  return (
    <div className="Search">
      <MdSearch color="white" size={50} />
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search note..."
      />
    </div>
  );
};

export default SearchBar;
