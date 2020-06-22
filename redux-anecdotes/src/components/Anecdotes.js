import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import incrementVoteOf  from '../reducers/anecdoteReducer'



const Anecdote = ({ anecdote, handleClick }) => {
    return (
        <li key={anecdote.id}>
            {anecdote.content}
            {anecdote.votes}
            <button onClick={handleClick}>vote</button>
        </li>
    )
}

// const addAnecdote = (event) => {
//     event.preventDefault()
//     const content = event.target.anecdote.value
//     event.target.anecdote.value = ''
//     dispatch(createAnecdote(content))
//   }

const Anecdotes = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state)

    return (
        <ul>
            {anecdotes.map(anecdote =>
                <Anecdote 
                anecdote={anecdote} 
                handleClick={() => dispatch(incrementVoteOf(anecdote.id))} />
            )}
        </ul>
    )}

export default { Anecdotes }