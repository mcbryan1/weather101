/* eslint-disable no-useless-concat */
import React from "react";

function DisplayWeather(props) {
  const { data } = props;
  const iconurl =
    "http://openweathermap.org/img/wn/" + `${data.weather[0].icon}` + ".png";

  return (
    <div className="container ">
      <div className="row mainWeatherData">
        <div className="col-6 weatherData1">
          <h1>
            {data.name}, <span>{data.sys.country}</span>
          </h1>
          <p>
            {new Date().toLocaleDateString()} <br />{" "}
            {new Date().toLocaleTimeString()}{" "}
          </p>
        </div>
        <div className="col-6 weatherData2">
          <h1>
            {Math.floor(data.main.temp - 273.15)}
            <sup>o</sup>
          </h1>
          <div className="row text-center">
            <div className="col-6">
              <img src={iconurl} alt="img" className="weatherIcon" />
            </div>
            <div className="col-6">
              <p>{data.weather[0].description}</p>
            </div>
          </div>
        </div>

        <div className="weatherDetails">
          <div className="row">
            {/***********  Left Side ***********/}

            <div className="col-6 leftSide">
              <div className="row miniDetails">
                <div className="col-6">
                  <p>High/Low</p>
                </div>
                <div className="col-6 info">
                  <p>
                    {Math.floor(data.main.temp_max - 273.15)}
                    <sup>o</sup> / {Math.floor(data.main.temp_min - 273.15)}
                    <sup>o</sup>
                  </p>
                </div>
              </div>
              <div className="row miniDetails">
                <div className="col-6">
                  <p>Humidity</p>
                </div>
                <div className="col-6 info">
                  <p>{data.main.humidity}%</p>
                </div>
              </div>
              <div className="row miniDetails">
                <div className="col-6">
                  <p>Pressure</p>
                </div>
                <div className="col-6 info">
                  <p>{data.main.pressure} hPa</p>
                </div>
              </div>
              <div className="row miniDetails">
                <div className="col-6">
                  <p>Visibility</p>
                </div>
                <div className="col-6 info">
                  <p>{data.visibility / 1000} km/hr</p>
                </div>
              </div>
            </div>

            {/***********  Right Side ***********/}
            <div className="col-6 rightSide">
              <div className="row miniDetails">
                <div className="col-6">
                  <p>Wind Speed</p>
                </div>
                <div className="col-6 info">
                  <p>{Math.floor((data.wind.speed * 18) / 5)} km/hr</p>
                </div>
              </div>
              <div className="row miniDetails">
                <div className="col-6">
                  <p>Wind Direction</p>
                </div>
                <div className="col-6 info">
                  <p>
                    {data.wind.deg} <sup>o</sup>
                  </p>
                </div>
              </div>
              <div className="row miniDetails">
                <div className="col-6">
                  <p>Sunrise</p>
                </div>
                <div className="col-6 info">
                  <p>
                    {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
                  </p>
                </div>
              </div>
              <div className="row miniDetails">
                <div className="col-6">
                  <p>Sunset</p>
                </div>
                <div className="col-6 info">
                  <p>{new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayWeather;
