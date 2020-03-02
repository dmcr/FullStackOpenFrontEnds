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

    const totalExercises = () => {
        let total = 0;
        for (let i = 0; i < parts.length; i++) {
            total += parts[i].exercises
        }
        return total
    }

    return (
        <div>
        <div>{partsList()}</div>
        <p>Total of {totalExercises()} exercises</p>
        </div>
    )
}

export default Content