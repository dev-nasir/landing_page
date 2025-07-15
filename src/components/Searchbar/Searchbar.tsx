import React, { useState } from "react";
import "./style.css";

import { FaArrowCircleRight } from "react-icons/fa";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", query);
  };

  return (
    <>
    <div className="search-container">
      <input
        type="text"
        placeholder="Search for item by title..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        <FaArrowCircleRight />
      </button>
    </div>
    <div className="discount-conatiner">
    <div className="flat">
        <h2>Flat<span>30</span>%off</h2>
      </div>
      <div className="items-cards">
      <h2>Popular items</h2>
      <p>Most ordered right now</p>
      </div>
      </div>
    </>
  );
};

export default SearchBar;
