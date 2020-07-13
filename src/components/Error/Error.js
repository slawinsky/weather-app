import React from "react";

import "./Error.scss";

import WeatherSearch from "./../WeatherSearch/WeatherSearch";

const Error = (props) => {
  const { message } = props;
  return (
    <div className="error">
      <p className="error__message">{message}</p>
      <WeatherSearch />
    </div>
  );
};

export default Error;
