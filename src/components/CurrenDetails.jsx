/* eslint-disable no-useless-concat */
import React from "react";
import "./main.css";

function CurrenDetails(props) {
  const {
    location,
    country,
    temperature,
    icon,
    description,
  } = props.weatherData;

  const iconurl =
    "http://openweathermap.org/img/wn/" + `${icon}` + ".png";
  return (
    <div className="container">
      <div className="row">
        <div className="col-3 text-center header mt-3">
          <img
            src="https://img.icons8.com/officel/80/000000/rainy-weather.png"
            alt=""
          />
          <p>Solo Weather</p>
        </div>
        <div className="col-4"></div>
        <div className="col-5 mt-3 text-left topRight">
          <h1>{location}, {country}</h1>
          <p>
            {new Date().toLocaleDateString()} -{" "}
            {new Date().toLocaleTimeString()}
          </p>
          <div className="row">
            <div className="col-6">
              <img src={iconurl} alt="icon" />
            </div>
            <div className="col-6">
              <h5>{description}</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="row bottomData">
        <div className="col-4 leftBottomData">
          <h1>
          {Math.floor(temperature - 273.15)}<sup>o</sup>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default CurrenDetails;
