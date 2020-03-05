import React from 'react'

const NewContact = ({newPerson, handleNewNameChange, handleNewNumberChange, addPerson}) => {
    return (
        <div>
            <h2>add a new contact</h2>
            <form onSubmit={addPerson}>
                <div>
                    name: <input 
                        value={newPerson.name}
                        onChange={handleNewNameChange}
                    />
                </div>
                <div>
                    number: <input 
                        value={newPerson.number}
                        onChange={handleNewNumberChange}
                    />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}

export default NewContact