import React, { useEffect } from 'react'
import Anecdotes  from './components/Anecdotes'
import NewAnecdote from './components/NewAnecdote'
import Notificiation from './components/Notification'
import Filter from './components/Filter'
import anecdoteService from './services/anecdotes'
import { useDispatch } from 'react-redux'
import { loadAnecdotes } from './reducers/anecdoteReducer'

const App = () => {
  const dispatch = useDispatch()
  useEffect(()=> {
    
    anecdoteService.getAll().then(
      anecdotes => dispatch(loadAnecdotes(anecdotes))
  )
  }, [dispatch])

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notificiation/>
      <Filter />
     <Anecdotes />
      <h2>create new</h2>
      <NewAnecdote />
    </div>
  )
}

export default App