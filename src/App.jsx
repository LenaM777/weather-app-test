import React from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import "./App.css";

const App = () => {
  const handleSearch = (city) => {
    console.log("Searching for city:", city);
  };

  return (
    <div className="app">
      <h1>Weather</h1>
      <SearchBar onSearch={handleSearch} />
    </div>
  );
};

export default App;
