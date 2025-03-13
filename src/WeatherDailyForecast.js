import React from "react";

export default function WeatherDailyForecast(props) {
  function maxTemp() {
    let temperature = Math.round(props.dailyData.temperature.maximum);
    return `${temperature}°C`;
  }
  function minTemp() {
    let temperature = Math.round(props.dailyData.temperature.minimum);
    return `${temperature}°C`;
  }

  function day() {
    const date = new Date(props.dailyData.time * 1000);
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const weekDay = daysOfWeek[date.getDay()];
    return weekDay;
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
