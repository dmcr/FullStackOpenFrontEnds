import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const NewNote = (props) => {
    const dispatch = useDispatch()

    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(createAnecdote(content))
        dispatch(setNotification(content, 5000))
    }

    return (
        <form onSubmit={addAnecdote}>
            <div><input 
            name='anecdote'
            /></div>
            <button type='submit' >create</button>
        </form>
    )
}


export default NewNote