import React, {useState} from 'react';
import Filter from './components/Filter'
import Numbers from './components/Numbers'
import NewContact from './components/NewContact'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'DMCR!', number: '000000'}
  ]) 
  const [ newPerson, setNewPerson ] = useState({name:'',number:''})
  const [ filter, setFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    if(persons.filter(person => person.name === newPerson.name).length > 0) return alert(`${newPerson.name} is already in phone book`)
    setPersons(persons.concat(newPerson))
    setNewPerson({name:'',number:''})
  }

  const handleNewNameChange = event => setNewPerson({name: event.target.value, number: newPerson.number})
  const handleNewNumberChange = event => setNewPerson({name: newPerson.name, number: event.target.value})
  const handleFilter = event => setFilter(event.target.value)
  const getFilteredPersons = () => persons.filter(person => person.name.toLowerCase().indexOf(filter.toLowerCase())>-1)

  return (
    <div>
      <Filter filter={filter} handleFilter={handleFilter} />
      <NewContact newPerson={newPerson} handleNewNameChange={handleNewNameChange} handleNewNumberChange={handleNewNumberChange} addPerson={addPerson} />
      <Numbers persons={getFilteredPersons()}/>
    </div>
  )
}

export default App;
