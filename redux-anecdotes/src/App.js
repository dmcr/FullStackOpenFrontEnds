import React from 'react'
import Anecdotes  from './components/Anecdotes'
import NewAnecdote from './components/NewAnecdote'
import Notificiation from './components/Notification'

const App = () => {

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notificiation/>
     <Anecdotes />
      <h2>create new</h2>
      <NewAnecdote />
    </div>
  )
}

export default App