import React, { useState, useEffect } from 'react'
import axios from 'axios'
const Weather = ({ city }) => {
  const [weather, setWeather] = useState({})
  const api_key = process.env.REACT_APP_API_KEY
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
      )
      .then((res) => {
        console.log(res)
        setWeather(res.data)
      })
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <>
      {weather.main ? (
        <div>
          <h1>Weather in {city}</h1>
          <div>Temperature {weather.main.temp}°C</div>
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].main}
          />
          <div>Wind {weather.wind.speed} m/s</div>
        </div>
      ) : null}
    </>
  )
}

export default Weather
