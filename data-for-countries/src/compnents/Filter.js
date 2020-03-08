import React from 'react'

const Filter = ({filter, handleFilter}) => {
    return (
        <div>
            <h2>Filter</h2>
            Find countries: <input value={filter} onChange={handleFilter}/>
        </div>
    )
}

export default Filter