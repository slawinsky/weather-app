import React from "react";

const CurrentWeather = () => {
  return (
    <div className="current-weather">
      <img className="current-weather__icon" />
      <p className="current-weather__city">Warsaw</p>
      <span className="current-weather__temperature">24</span>
    </div>
  );
};

export default CurrentWeather;
