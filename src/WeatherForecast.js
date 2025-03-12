import React, { useState } from "react";
import axios from "axios";
import WeatherDailyForecast from "./WeatherDailyForecast";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  function handleForecastResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <WeatherDailyForecast dailyData={forecastData[0]} />
          </div>
          <div className="col">
            <WeatherDailyForecast dailyData={forecastData[1]} />
          </div>
          <div className="col">
            <WeatherDailyForecast dailyData={forecastData[2]} />
          </div>
          <div className="col">
            <WeatherDailyForecast dailyData={forecastData[3]} />
          </div>
          <div className="col">
            <WeatherDailyForecast dailyData={forecastData[4]} />
          </div>
          <div className="col">
            <WeatherDailyForecast dailyData={forecastData[5]} />
          </div>
          <div className="col">
            <WeatherDailyForecast dailyData={forecastData[6]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = `ba054cd6f15a15c42o3b84c5df16bbtf`;
    let longitude = props.cityForecast.coordinates.longitude;
    let latitude = props.cityForecast.coordinates.latitude;
    let unit = "metric";
    let apiForecastUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=${unit}`;
    axios.get(apiForecastUrl).then(handleForecastResponse);

    return null;
  }
}
