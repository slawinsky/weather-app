import React, { Component } from "react";

import "./../../styles/WeatherSearch.scss";

class WeatherSearch extends Component {
  state = {
    isActive: false,
  };

  handleClick = () => {
    this.setState({
      isActive: !this.state.isActive,
    });
  };

  render() {
    return (
      <div className="weather-search">
        <button className="weather-search__btn btn" onClick={this.handleClick}>
          <img className="btn__icon" src="src/assets/img/location.svg" />
          <span className="btn__txt">change location</span>
        </button>
        <form
          className={`weather-search__form form ${
            this.state.isActive ? "active" : null
          }`}
        >
          <input type="text" className="form__input" />
          <input type="submit" value="ok" className="form__submit" />
        </form>
      </div>
    );
  }
}

export default WeatherSearch;
