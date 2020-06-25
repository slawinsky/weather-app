import React, { Component } from "react";

import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import DailyForecast from "./components/DailyForecast/DailyForecast";

class App extends Component {
  state = {};

  render() {
    return (
      <div className="container">
        <div className="app">
          <div className="app__top">
            <CurrentWeather />
          </div>
          <div className="app__bottom">
            <DailyForecast />
            <DailyForecast />
            <DailyForecast />
            <DailyForecast />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
