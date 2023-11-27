import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./profile";

const SearchBar = ({ searchData, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    const filteredData = searchData.filter((employeeData) =>
      employeeData.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    onSearch(filteredData);
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "70px",
        flexDirection: "row",
        padding: "2px",
      }}
    >
      <div>
        <input
          type="text"
          color="#fff"
          placeholder="Search With name"
          style={{
            backgroundColor: "transparent",
            border: "none",
            width: "100%",
            fontFamily: "Mulish, Bold",
            fontSize: "18px",
            color: "white",
            outline: "none",
            padding: "8px",
          }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="search-icon" onClick={handleSearch}>
        <FaSearch
          size={20}
          className="profile-icon"
          color="whiteSmoke"
          style={{
            backgroundColor: "transparent",
            cursor: "pointer",
            padding: "8px",
          }}
        />
      </div>
    </div>
  );
};

export { SearchBar };
