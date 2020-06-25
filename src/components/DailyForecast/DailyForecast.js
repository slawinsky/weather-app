import React from "react";

import "./../../styles/DailyForecast.scss";

const DailyForecast = () => {
  return (
    <div className="daily-forecast">
      <p className="daily-forecast__day">Monday</p>
      <span className="daily-forecast__temperature">24</span>
      <img className="daily-forecast__icon" src="src/assets/img/a01d.svg" />
    </div>
  );
};

export default DailyForecast;
