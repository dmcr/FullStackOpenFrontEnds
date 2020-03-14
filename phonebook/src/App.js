import React, {useState, useEffect} from 'react';
import Filter from './components/Filter'
import Numbers from './components/Numbers'
import NewContact from './components/NewContact'
import phonebookService from './services/Phonebook'

const App = () => {
  const person = {name: '',age: ''}
  const [ persons, setPersons] = useState([]) 
  const [ newPerson, setNewPerson ] = useState(person)
  const [ filter, setFilter] = useState('')
  
  useEffect(() => {
    phonebookService.getAll().then(initialPersons => setPersons(initialPersons))
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    if(persons.filter(person => person.name === newPerson.name).length > 0) return alert(`${newPerson.name} is already in phone book`)
    setPersons(persons.concat(newPerson))
    setNewPerson(person)
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
