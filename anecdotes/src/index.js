import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(6).fill(0))

  const handleRandomAnecdote = () => {
      const newSelection = Math.floor(Math.random() * Math.floor(anecdotes.length))
      setSelected(newSelection)
  }

  const handleAnecdoteVote = () => {
    const newVotes = [...votes]
    newVotes[selected]++
    setVotes(newVotes)
  }

  return (
    <div>
      <AnecdoteOfTheDay anecdotes={props.anecdotes} votes={votes} selected={selected} handleRandom={handleRandomAnecdote} handleVote={handleAnecdoteVote} />
      <AnecdoteWithMostVotes anecdotes={props.anecdotes} votes={votes} selected={selected} />
    </div>
  )
}

const AnecdoteOfTheDay = (props) => {
    return (
        <div>
            <h1>Anecdote of the day</h1>
            <p>{props.anecdotes[props.selected]}</p>
            <p>has {props.votes[props.selected]} votes</p>
            <button onClick={props.handleVote}>Vote</button>
            <button onClick={props.handleRandom}>Next anecdote</button>
        </div>
    )
}

const AnecdoteWithMostVotes = (props) => {
    // Should probably move this up into a state to avoid duplication of call to find most votes. Would in production. Fine for this.
    const anecdoteWithMostVotes = () => {
        let highest = 0;
        for (let i = 0; i < props.votes.length; i++) {
            if (props.votes[i] > props.votes[highest]) highest = i
        }
        return highest
    }
    return (
        <div>
            <h1>Anecdote with most votes</h1>
            <p>{props.anecdotes[anecdoteWithMostVotes()]}</p>
            <p>has {props.votes[anecdoteWithMostVotes()]} votes</p>
        </div>
    )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)