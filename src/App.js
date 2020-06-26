import React, { Component } from "react";

import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import DailyForecast from "./components/DailyForecast/DailyForecast";
import Loading from "./components/Loading/Loading";
import Error from "./components/Error/Error";

const KEY = "d8d7e500ca004d009e81a0cd419894d0";
const API = `https://api.weatherbit.io/v2.0/forecast/daily?city=Warsaw&key=${KEY}`;

class App extends Component {
  state = {
    data: null,
    isLoading: true,
    error: null,
    location: "",
  };

  handleWeatherSearch = (e) => {
    e.preventDefault();
    this.handleDataFetch(
      `https://api.weatherbit.io/v2.0/forecast/daily?city=${this.state.location}&key=${KEY}`
    );
  };

  handleLocationChange = (e) => {
    this.setState({
      location: e.target.value,
    });
  };

  handleDataFetch = (api) => {
    this.setState({ isLoading: true });

    setTimeout(() => {
      fetch(api)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Something went wrong...");
          }
        })
        .then((data) => this.setState({ data, isLoading: false }))
        .catch((error) => this.setState({ error, isLoading: false }));
    }, 2000);
  };

  componentDidMount() {
    this.handleDataFetch(API);
  }

  render() {
    const { isLoading, error, data } = this.state;

    if (isLoading) {
      return (
        <div className="container">
          <Loading />
        </div>
      );
    }

    if (error) {
      return (
        <div className="container">
          <Error message={error.message} />
        </div>
      );
    }

    if (!isLoading) {
      const { handleWeatherSearch, handleLocationChange } = this;
      const { location } = this.state;

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
                weatherSearch={handleWeatherSearch}
                locationChange={handleLocationChange}
                location={location}
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
