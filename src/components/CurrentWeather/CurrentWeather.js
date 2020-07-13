import React from "react";

import WeatherSearch from "./../WeatherSearch/WeatherSearch";

import "./CurrentWeather.scss";

const CurrentWeather = ({
  city,
  temp,
  icon,
  weatherSearch,
  locationChange,
}) => {
  return (
    <div className="current-weather">
      <img
        className="current-weather__icon"
        src={`src/assets/img/${icon}.svg`}
      />
      <p className="current-weather__city">{city}</p>
      <span className="current-weather__temperature">{Math.floor(temp)}°C</span>
      <WeatherSearch
        weatherSearch={weatherSearch}
        locationChange={locationChange}
      />
    </div>
  );
};

export default CurrentWeather;
