import React from "react";

import WeatherSearch from "./../WeatherSearch/WeatherSearch";

import "./../../styles/CurrentWeather.scss";

const CurrentWeather = () => {
  return (
    <div className="current-weather">
      <img className="current-weather__icon" src="src/assets/img/a01d.svg" />
      <p className="current-weather__city">Warsaw</p>
      <span className="current-weather__temperature">24</span>
      <WeatherSearch />
    </div>
  );
};

export default CurrentWeather;
