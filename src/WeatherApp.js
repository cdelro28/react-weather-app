import React, { useState } from "react";
import axios from "axios";
import "./WeatherApp.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function WeatherApp(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.temperature.current,
      iconUrl: response.data.condition.icon_url,
      city: response.data.city,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.time * 1000),
      coordinates: response.data.coordinates,
    });
    setReady(true);
  }

  function search() {
    let apiKey = `ba054cd6f15a15c42o3b84c5df16bbtf`;
    let unit = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (ready) {
    return (
      <div className="WeatherApp">
        <h1>Today's weather forecast...</h1>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="Search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <button type="submit" className="btn w-100">
                Search
              </button>
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast cityForecast={weatherData} />
      </div>
    );
  } else {
    search();
    return <h2>Loading...</h2>;
  }
}
