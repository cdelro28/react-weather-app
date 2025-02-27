import React from "react";
import "./WeatherApp.css";

export default function WeatherApp() {
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
          <h2>Sydney</h2>
          <ul>
            <li>Thursday 13:18, light rain</li>
            <li>Humidity: 83%, Wind: 3.14km/h</li>
          </ul>
        </div>
        <div className="col-6">
          <div className="d-flex justify-content-end">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
              alt="light rain"
            />
            <span className="temperature">21</span>
            <span className="unit">°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
