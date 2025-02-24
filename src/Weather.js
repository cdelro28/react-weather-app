import React from "react";
import axios from "axios";

export default function Weather(props) {
  function showWeather(response) {
    alert(`The Temperature in ${props.city} is ${response.data.main.temp}°C`);
  }

  let apiKey = `62bc298785543e137bc6756e514eb1c3`;
  let units = `metric`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showWeather);

  return <h2>Hello from weather component!!</h2>;
}
