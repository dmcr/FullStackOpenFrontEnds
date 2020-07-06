import anecdoteService from '../services/anecdotes'

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
      return state.map(annecdote => annecdote.id === action.data.id ? action.data : annecdote)
    case 'LOAD_ANECDOTES':
      return action.data
    default:
      return state
  }
}

export const incrementVoteOf = (id) => {
  return async dispatch => {
    const updatedAnecdote = await anecdoteService.putVote(id)
    dispatch({
      type: 'NEW_VOTE',
      data: updatedAnecdote
    })
  }
}

export const createAnecdote = (anecdote) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.postAnecdote(anecdote)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'LOAD_ANECDOTES',
      data: anecdotes
    })
  }
}

export default anecdoteReducer