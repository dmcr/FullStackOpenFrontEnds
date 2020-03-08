import React from 'react'

const Country = ({country}) => {
    const listLanguages = () => country.languages.map(language => <li key={language.nativeName}>{language.name}</li>)
    return (
    <div>
        <h2>{country.name}</h2>
        <p>Capital: {country.capital}</p>
        <p>Population: {country.population}</p>
        <h3>Languages</h3>
        <ul>{listLanguages()}</ul>
        <img width="100" heigh="50" src={country.flag} alt={country.flag} />
    </div>
    )
}

export default Country