import React, {useState, useEffect} from 'react'
import Filter from './compnents/Filter'
import Countries from './compnents/Countries'
import axios from 'axios'
console.log(process.env.REACT_APP_OPEN_WEATHER_KEY)
function App() {
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])
  const [weather, setWeather] = useState({
        'weather': [{'id': '', 'main': '', 'description': '', 'icon': ''}], 
        'main': {'temp': ''},
        'wind': {
          'speed': 8.2,
          'deg': 240
      }
      })

  const handleFilter = event => setFilter(event.target.value)
  const getCountries = () => countries.filter(country => country.name.toLowerCase().indexOf(filter.toLowerCase())>-1)
  const showOnClick = event => setFilter(event.target.value)
  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
    })
  }, [])  

  return (
    <div>
      <h1>Get Country Info</h1>
      <Filter filter={filter} handleFilter={handleFilter} />
      <Countries countries={getCountries()} showOnClick={showOnClick} weather={weather} setWeather={setWeather}/>
    </div>
  )
}

export default App;
