import React from 'react'

const Filter = ({filter, handleFilter}) => {
    return (
        <div>
        <h1>Phonebook</h1>
        filter: <input value={filter} onChange={handleFilter} />
      </div>
    )
}

export default Filter