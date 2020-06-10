import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getConfig = () => {
  const config = {
    headers: { Authorization: token }
  }
  return config
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = async (newBlog) => {
  const config = getConfig()

  const response = await axios.post(baseUrl, newBlog, config)
  return response.data
}

const addLike = async (id) => {
  const config = getConfig()

  const response = await axios.put(`${baseUrl}/like/${id}`, '', config)
  return response.data
}

export default { getAll, create, setToken, addLike }