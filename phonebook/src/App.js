import React, {useState} from 'react';
import Phonebook from './components/Phonebook'
import Numbers from './components/Numbers'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'DMCR!' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addPerson = (event) => {
    if(persons.filter(person => person.name === newName).length > 0) return alert(`${newName} is already in phone book`)
    event.preventDefault()
    const newPerson = {
      name: newName
    }
    setPersons(persons.concat(newPerson))
    setNewName('')
  }

  const handleNewNameChange = event => setNewName(event.target.value)

  return (
    <div>
      <Phonebook newName={newName} addPerson={addPerson} handleNewNameChange={handleNewNameChange} />
      <Numbers persons={persons} />
    </div>
  )
}


export default App;
