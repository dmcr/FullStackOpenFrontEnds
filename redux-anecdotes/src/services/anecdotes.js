import axios from 'axios'
import { getId } from '../reducers/anecdoteReducer'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const postAnecdote = async (anecdote) => {
    const object = { content: anecdote, id: getId, votes: 0 }
    const response = await axios.post(baseUrl, object)
    return response.data
}

const putVote = async (id) => {
    let response = await axios.get(`${baseUrl}/${id}`)
    const currentObject = response.data
    const newObject = { content: currentObject.content, votes: currentObject.votes + 1 }
    response = await axios.put(`${baseUrl}/${id}`, newObject)
    return response.data
}

export default { getAll, postAnecdote, putVote }