import React from "react";

import "./DailyForecast.scss";

const DailyForecast = (props) => {
  const { date, temp, icon } = props;

  // date string to day name
  const day = new Date(date).toLocaleDateString("en-EN", { weekday: "long" });

  return (
    <div className="daily-forecast">
      <p className="daily-forecast__day">{day}</p>
      <span className="daily-forecast__temperature">{Math.floor(temp)}°C</span>
      <img
        className="daily-forecast__icon"
        src={`src/assets/img/${icon}.svg`}
      />
    </div>
  );
};

export default DailyForecast;
