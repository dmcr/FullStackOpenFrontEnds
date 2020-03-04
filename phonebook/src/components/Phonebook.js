import React from 'react'

const Phonebook = ({filter, handleFilter}) => {
    return (
        <div>
        <h1>Phonebook</h1>
        filter: <input value={filter} onChange={handleFilter} />
      </div>
    )
}

export default Phonebook