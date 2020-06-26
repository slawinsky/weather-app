import React, { Component } from "react";

import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import DailyForecast from "./components/DailyForecast/DailyForecast";

const KEY = "d8d7e500ca004d009e81a0cd419894d0";
const API = `https://api.weatherbit.io/v2.0/forecast/daily?city=Warsaw&key=${KEY}`;

class App extends Component {
  state = {
    data: null,
    isLoading: true,
    error: null,
  };

  componentDidMount() {
    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong...");
        }
      })
      .then((data) => this.setState({ data, isLoading: false }))
      .catch((error) => this.setState({ error, isLoading: false }));
  }

  render() {
    const { isLoading, error, data } = this.state;

    if (isLoading) {
      return <p>loading</p>;
    }

    if (error) {
      return <p>{error.message}</p>;
    }

    if (!isLoading) {
      const currentWeather = data.data[0];

      // make array of 4 next days forecast
      const dailyForecast = data.data.slice(1, 5);

      const Forecast = dailyForecast.map((day) => (
        <DailyForecast
          date={day.datetime}
          temp={day.temp}
          icon={day.weather.icon}
        />
      ));

      return (
        <div className="container">
          <div className="app">
            <div className="app__top">
              <CurrentWeather
                key={data.valid_date}
                city={data.city_name}
                temp={currentWeather.temp}
                icon={currentWeather.weather.icon}
              />
            </div>
            <div className="app__bottom">{Forecast}</div>
          </div>
        </div>
      );
    }
  }
}

export default App;
