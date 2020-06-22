import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Anecdotes  from './components/Anecdotes'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Anecdotes</h2>
     <Anecdotes />
      <h2>create new</h2>
      <form >
        <div><input 
          name='anecdote'
        /></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default App