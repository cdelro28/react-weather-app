import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div>
      <div className="row">
        <div className="col-6">
          <h2>{props.data.city}</h2>
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
            <li>
              Humidity: {props.data.humidity}%, Wind: {props.data.wind}km/h
            </li>
          </ul>
        </div>
        <div className="col-6">
          <div className="d-flex justify-content-end">
            <img src={props.data.icon} alt={props.data.description} />
            <span className="temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
