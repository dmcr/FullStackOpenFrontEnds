import React from 'react'
import Number from './Number'

const Numbers = ({persons, deletePerson}) => {  
    return (
        <div>
            <h1>Numbers</h1>
            <ul>
                {persons.map(person => <Number key={person.name} person={person} deletePerson={deletePerson} />)}
            </ul>
        </div>
    )
}

export default Numbers