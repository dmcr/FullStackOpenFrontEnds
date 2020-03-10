import React, {useEffect} from 'react'
import axios from 'axios'

const Weather = ({country, weather, setWeather}) => {
    useEffect(() => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}`)
            .then(response => {
              setWeather(response.data)
      })
    }, [country, setWeather])
    return (
        <div>
            <p>Temperature: {weather.main.temp}</p>
            <img width="50" height="50" src={weather.weather.icon} alt='icon' />
            <p>Wind: {weather.wind.speed} kph {weather.wind.deg} degrees</p>
        </div>
    ) 
}

export default Weather