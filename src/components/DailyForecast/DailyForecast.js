import React from "react";

const DailyForecast = () => {
  return (
    <div className="daily-forecast">
      <p className="daily-forecast__day">Monday</p>
      <span className="daily-forecast__temperature">24</span>
      <img className="daily-forecast__icon" />
    </div>
  );
};

export default DailyForecast;
