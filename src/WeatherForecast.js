import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherDailyForecast from "./WeatherDailyForecast";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.cityForecast]);

  function handleForecastResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecastData.map(function (dailyForecast, index) {
            if (index < 6) {
              return (
                <div className="col w-100 day-data" key={index}>
                  <WeatherDailyForecast dailyData={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
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
