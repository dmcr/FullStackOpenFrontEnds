import React from 'react'
import Country from './Country'

const Countries = ({countries, showOnClick, weather, setWeather}) => {
    if (countries.length > 10) return (<p>Too many matches, specify new filter</p>)
    if (countries.length === 1) return (<Country country={countries[0]} weather={weather} setWeather={setWeather} />)
    const results = () => countries.map(country => <p key={country.name}>{country.name} <button type="submit" value={country.name} onClick={showOnClick}>Show</button></p>)
    return (
        <div>
            <h2>Results</h2>
            {results()}
        </div>
    )
}

export default Countries