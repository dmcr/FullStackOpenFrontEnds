import React from 'react'

const Numbers = ({persons}) => {
    const displayNumbers = () => persons.map(person => <li key={person.name}>{person.name}</li>)
    return (
        <div>
            <h1>Numbers</h1>
            <ul>
                {displayNumbers()}
            </ul>
        </div>
    )
}

export default Numbers