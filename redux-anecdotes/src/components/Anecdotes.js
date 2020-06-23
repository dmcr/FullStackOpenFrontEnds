import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementVoteOf } from '../reducers/anecdoteReducer'

const Anecdote = ({ anecdote, handleClick, id }) => {
    return (
        <li key={id}>
            {anecdote.content}
            {anecdote.votes}
            <button onClick={handleClick}>vote</button>
        </li>
    )
}

const Anecdotes = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state)

    return (
        <ul>
            {anecdotes.map(anecdote =>
                <Anecdote 
                anecdote={anecdote} 
                key={anecdote.id}
                handleClick={() => dispatch(incrementVoteOf(anecdote.id))} />
            )}
        </ul>
    )}

export default Anecdotes 