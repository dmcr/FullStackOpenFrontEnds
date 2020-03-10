import React from 'react'
import Weather from './Weather'

const Country = ({country, weather, setWeather}) => {
    const listLanguages = () => country.languages.map(language => <li key={language.nativeName}>{language.name}</li>)

    return (
    <div>
        <h2>{country.name}</h2>
        <p>Capital: {country.capital}</p>
        <p>Population: {country.population}</p>
        <h3>Languages</h3>
        <ul>{listLanguages()}</ul>
        <img width="100" heigh="50" src={country.flag} alt={country.flag} />
        <h3>Weather in {country.name}</h3>
        <Weather country={country}  weather={weather} setWeather={setWeather}/>

    </div>
    )
}

export default Country