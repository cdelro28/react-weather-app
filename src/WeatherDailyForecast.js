import React from "react";

export default function WeatherDailyForecast(props) {
  function maxTemp() {
    let temperature = Math.round(props.dailyData.temperature.maximum);
    return `${temperature}°`;
  }
  function minTemp() {
    let temperature = Math.round(props.dailyData.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    const date = new Date(props.dailyData.time * 1000);
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const weekDay = daysOfWeek[date.getDay()];
    return weekDay;
  }

  return (
    <ul className="data-forecast">
      <li>{day()}</li>
      <li>
        <img
          src={props.dailyData.condition.icon_url}
          alt={props.dailyData.condition.description}
          className="img-forecast"
        />
      </li>
      <li>
        {maxTemp()} <span className="min-temp">{minTemp()}</span>
      </li>
    </ul>
  );
}
