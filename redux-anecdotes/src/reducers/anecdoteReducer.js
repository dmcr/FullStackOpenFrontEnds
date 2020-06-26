export const getId = () => (100000 * Math.random()).toFixed(0)

// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0
//   }
// }

const anecdoteReducer = (state = [], action) => {
  // console.log('Annecdote State Action:', action)
  switch(action.type) {
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    case 'NEW_VOTE':
      return state.map(annecdote => annecdote.id === action.data.id ? { ...annecdote, votes: annecdote.votes + 1 } : annecdote)
    case 'LOAD_ANECDOTES':
      return action.data
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

export const loadAnecdotes = (anecdotes) => {
  return {
    type: 'LOAD_ANECDOTES',
    data: anecdotes
  }
}

export default anecdoteReducer