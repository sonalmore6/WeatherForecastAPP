import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input.trim()) {
      onSearch(input.trim());
      setInput("");
    }
  };

  return (
    <div className="d-flex mb-4">
      <input
        type="text"
        className="form-control"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter city name"
      />
      <button className="btn btn-success ml-2" onClick={handleSearch}>
        Add City
      </button>
    </div>
  );
};

export default SearchBar;
