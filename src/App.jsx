import { React, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (city) => {
    console.log("Searching for city:", city);

    setIsLoading(true);
    setError(null);
    setWeatherData(null);

    await new Promise((resolve) => setTimeout(resolve, 1500));
    // setWeatherData({ name: city, main: { temp: 20, humidity: 60, feels_like: 19 }, weather: [{ description: 'clear sky', icon: '01d' }], sys: { country: 'EX' } });
    setError(`Failed to fetch weather for ${city}.`);
    setIsLoading(false);
  };

  return (
    <div className="app">
      <h1>Weather</h1>
      <SearchBar onSearch={handleSearch} />
    </div>
  );
};

export default App;
