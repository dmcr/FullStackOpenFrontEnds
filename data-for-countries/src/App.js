import React, {useState, useEffect} from 'react'
import Filter from './compnents/Filter'
import Countries from './compnents/Countries'
import axios from 'axios'

function App() {
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])

  const handleFilter = event => setFilter(event.target.value)
  const getCountries = () => countries.filter(country => country.name.toLowerCase().indexOf(filter.toLowerCase())>-1)
  
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
      <Countries countries={getCountries()} />
    </div>
  )
}

export default App;
