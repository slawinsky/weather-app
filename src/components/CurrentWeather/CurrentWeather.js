import React from "react";

import WeatherSearch from "./../WeatherSearch/WeatherSearch";

import "./../../styles/CurrentWeather.scss";

const CurrentWeather = (props) => {
  const { city, temp, icon, weatherSearch, locationChange } = props;
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
