import React, { Component } from "react";
import CurrenDetails from "./CurrenDetails";
import Axios from "axios";

const APIKEY = "34121f20c14a520c868f0c9aa244a969";
export class Current extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coords: {
        latitude: 0,
        longitude: 0,
      },
      data: {},
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      let newCoords = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };

      this.setState({
        coords: newCoords,
      });

      Axios.get(
        ` https://api.openweathermap.org/data/2.5/weather?lat=${this.state.coords.latitude}&lon=${this.state.coords.longitude}&appid=${APIKEY} `
      ).then((res) => {
        // console.log(res);

        let weatherData = {
          location: res.data.name,
          country: res.data.sys.country,
          temperature: res.data.main.temp,
          description: res.data.weather[0].description,
          icon: res.data.weather[0].icon,
        };
        // console.log(weatherData);
        this.setState({
          data: weatherData,
        });
      });
    });
  }

  render() {
    return (
      <div>
        <CurrenDetails weatherData={this.state.data}/>
      </div>
    );
  }
}

export default Current;
