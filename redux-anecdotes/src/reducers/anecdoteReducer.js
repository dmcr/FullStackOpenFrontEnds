const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'I decided to quit my job as a personal trainer because I’m not big enough or strong enough... I’ve just handed in my Too weak notice.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const anecdoteReducer = (state = initialState, action) => {
  console.log('Annecdote State Action:', action)
  switch(action.type) {
    case 'NEW_ANECDOTE':
      return [...state, asObject(action.data)]
    case 'NEW_VOTE':
      return state.map(annecdote => annecdote.id === action.data.id ? { ...annecdote, votes: annecdote.votes + 1 } : annecdote)
    default:
      return state
  }
}

export const incrementVoteOf = (id) => {
  return {
    type: 'NEW_VOTE',
    data: { id }
  }
}

export const createAnecdote = (anecdote) => {
  return {
    type: 'NEW_ANECDOTE',
    data: anecdote
  }
}

export default anecdoteReducer