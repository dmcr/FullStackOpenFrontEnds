import React, {useEffect} from 'react'

const Countries = ({countries}) => {
    if (countries.length > 10) return (<p>Too many matches, specify new filter</p>)
    if (countries.length === 1) return (<Country country={countries[0]} />)
    const results = () => countries.map(country =><p>{country.name}</p>)
    return (
        <div>
            <h2>Results</h2>
            {results()}
        </div>
    )
}

export default Countries