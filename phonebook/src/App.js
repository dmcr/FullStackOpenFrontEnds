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
    const personToUpdate = persons.filter(person => person.name === newPerson.name)
    if(personToUpdate.length > 0) {
      updatePerson({...personToUpdate[0], number : newPerson.number})
    }
    else {
      phonebookService.create(newPerson)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewPerson(returnedPerson)
      })
    }
  }

  const updatePerson = (personToUpdate) => {
    if (window.confirm("Person already exists, would you like to update their number?")) {
      phonebookService.update(personToUpdate)
      .then(returnedPerson => 
        setPersons(persons.map(person => 
          person.id !== returnedPerson.id ? person : returnedPerson)))
    }
  }

  const deletePerson = (id) => {
    if (window.confirm("Are you sure you want to delete this person?")) {
      phonebookService.remove(id)
      .then(success => setPersons(persons.filter(person => person.id !== id)))
    }
  }

  const handleNewNameChange = event => setNewPerson({name: event.target.value, number: newPerson.number})
  const handleNewNumberChange = event => setNewPerson({name: newPerson.name, number: event.target.value})
  const handleFilter = event => setFilter(event.target.value)
  const getFilteredPersons = () => persons.filter(person => person.name.toLowerCase().indexOf(filter.toLowerCase())>-1)

  return (
    <div>
      <Filter filter={filter} handleFilter={handleFilter} />
      <NewContact newPerson={newPerson} handleNewNameChange={handleNewNameChange} handleNewNumberChange={handleNewNumberChange} addPerson={addPerson} />
      <Numbers deletePerson={deletePerson} persons={getFilteredPersons()}/>
    </div>
  )
}

export default App;
