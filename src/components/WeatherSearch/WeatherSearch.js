import React, { Component } from "react";

import "./../../styles/WeatherSearch.scss";

class WeatherSearch extends Component {
  state = {};

  render() {
    return (
      <div className="weather-search">
        <button className="weather-search__btn btn">
          <img className="btn__icon" src="src/assets/img/location.svg" />
          <span className="btn__txt">change location</span>
        </button>
        <form className="weather-search__form form">
          <input type="text" className="form__input" />
          <input type="submit" value="ok" className="form__submit" />
        </form>
      </div>
    );
  }
}

export default WeatherSearch;
