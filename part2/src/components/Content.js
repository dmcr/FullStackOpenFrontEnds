import React from 'react';
import Part from './Part'

const Content = ({parts}) => {

    const partsList = () => parts.map(part => 
        <Part
            key={part.id}
            name={part.name}
            exercises={part.exercises}
        />
    )
    
    const totalExercises = parts.reduce((s, p) => {
        return s + p.exercises
    }, 0)

    return (
        <div>
        <div>{partsList()}</div>
        <p>Total of {totalExercises} exercises</p>
        </div>
    )
}

export default Content