import React from "react";
import "./App.css";
import WeatherSearch from "./WeatherSearch";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <WeatherSearch />
      <footer>
        This project was coded by
        <a
          href="https://www.linkedin.com/in/christinedelrosario/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Christine Del Rosario{" "}
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/cdelro28/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          open-sourced on GitHub{" "}
        </a>{" "}
        and{" "}
        <a
          href="https://cd-react-weather-app.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}
