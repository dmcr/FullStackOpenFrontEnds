import React from 'react'

const Phonebook = ({newName, handleNewNameChange, addPerson}) => {
    return (
        <div>
            <h1>Phonebook</h1>
            <form onSubmit={addPerson}>
            <div>
            name: <input 
                value={newName}
                onChange={handleNewNameChange}
            />
            </div>
            <div>
            <button type="submit">add</button>
            </div>
        </form>
      </div>
    )
}

export default Phonebook