import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  function handleChange(event) {
    setCity(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
      setCity("");
    } else {
      alert("Please enter a city name");
    }
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
