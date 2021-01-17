import React, { useState } from "react";
import DisplayWeather from "./DisplayWeather";

function Search() {
  const APIKEY = "34121f20c14a520c868f0c9aa244a969";

  const [form, setForm] = useState({
    city: "",
    country: "",
  });

  const [weather, setWeather] = useState([]);
  //   Fetching Api
  async function weatherData(e) {
    e.preventDefault();
    if (form.city === "") {
      alert("Input Data");
    } else {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&appid=${APIKEY}`
      )
        .then((res) => res.json())
        // .then((data) => console.log(data))
        .catch((error) => console.log(error));
      setWeather({
        data: data,
      });
    }
  }

  //   handling Text Change
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "city") {
      setForm({ ...form, city: value });
    }
    if (name === "country") {
      setForm({ ...form, country: value });
    }
    // console.log(form.city, form.country);
  };
  return (
    <div className="searchPlace">
      <div className="search">
        <div>
          <form onSubmit={(e) => weatherData(e)}>
            <input
              type="text"
              placeholder="Enter City"
              className="inputEffect"
              name="city"
              onChange={(e) => handleChange(e)}
            />
            <input
              type="text"
              placeholder="Country"
              className="inputEffect"
              name="country"
              onChange={(e) => handleChange(e)}
            />
            <button className="btn btn-dark" onClick={(e) => weatherData(e)}>
              Search
            </button>
          </form>
        </div>
        {weather.data !== undefined ? (
          <div>
            <DisplayWeather data={weather.data}/>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Search;
