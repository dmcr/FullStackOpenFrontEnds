import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementVoteOf } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

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
    const anecdotes = useSelector(state => state.anecdotes)
    const filter = useSelector(state => state.filter)
    const filteredAnecdotes = (filter) ? 
        anecdotes.filter(anecdote => anecdote.content.toLowerCase().indexOf(filter.toLowerCase()) !== -1)
        : anecdotes
    return (
        <ul>
            {filteredAnecdotes.map(anecdote =>
                <Anecdote 
                anecdote={anecdote} 
                key={anecdote.id}
                handleClick={() => {
                    dispatch(incrementVoteOf(anecdote.id))
                    dispatch(setNotification(anecdote.content, 5000))
                    }
                } />
            )}
        </ul>
    )}

export default Anecdotes 