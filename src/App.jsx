import { React, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay/WeatherDisplay";
import { fetchWeatherData } from "./services/weatherService";
import "./App.css";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (city) => {
    setIsLoading(true);
    setError(null);
    setWeatherData(null);

    try {
      const data = await fetchWeatherData(city);
      setWeatherData(data);
    } catch (err) {
      setError(err.message || "An unknown error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>Weather</h1>
      <SearchBar onSearch={handleSearch} />
      {isLoading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {weatherData && !isLoading && !error && (
        <WeatherDisplay data={weatherData} />
      )}
    </div>
  );
};

export default App;
