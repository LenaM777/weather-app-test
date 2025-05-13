import React from "react";

function WeatherDisplay({ data }) {
  if (!data) {
    return null;
  }
  const { name, main, weather, wind, clouds } = data;
  const iconCode = weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <div className="weather-display">
      <h2>{name}</h2>
      <img src={iconUrl} alt={weather[0].description} />
      <p>Temperature: {main.temp.toFixed(10)}°C</p>
      <p>Feels like: {main.feels_like.toFixed(0)} °C</p>
      <div>
        <p>Condition: {weather[0].description}</p>
        <p>Cloudiness: {clouds.all} %</p>
        <p>Humidity: {main.humidity} %</p>
        <p>Wind Speed: {wind.speed.toFixed(1)} m/s</p>
      </div>
    </div>
  );
}

export default WeatherDisplay;
