import React from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <h1>Weather</h1>
      <SearchBar />
    </div>
  );
};

export default App;
