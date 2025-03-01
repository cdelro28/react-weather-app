import React, { useState } from "react";
import axios from "axios";
import "./WeatherApp.css";

export default function WeatherApp() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.temperature.current,
      icon: response.data.condition.icon_url,
      city: response.data.city,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className="WeatherApp">
        <h1>Today's weather forecast...</h1>
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="Search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <button type="submit" className="btn w-100">
                Search
              </button>
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col-6">
            <h2>{weatherData.city}</h2>
            <ul>
              <li className="text-capitalize">
                Thursday 13:18, {weatherData.description}
              </li>
              <li>
                Humidity: {weatherData.humidity}%, Wind: {weatherData.wind}km/h
              </li>
            </ul>
          </div>
          <div className="col-6">
            <div className="d-flex justify-content-end">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
                alt="light rain"
              />
              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = `ba054cd6f15a15c42o3b84c5df16bbtf`;
    let city = "Sydney";
    let unit = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);

    return <h2>Loading...</h2>;
  }
}
