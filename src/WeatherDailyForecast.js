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
    let date = new Date(props.dailyData.time * 1000);
    let day = date.getDate();
    return day;
  }

  return (
    <ul className="dailyForecast">
      <li>{day()}</li>
      <li>
        <img
          src={props.dailyData.condition.icon_url}
          alt={props.dailyData.condition.description}
        />
      </li>
      <li>
        {maxTemp()} - {minTemp()}
      </li>
    </ul>
  );
}
