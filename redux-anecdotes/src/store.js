import { createStore } from 'redux'
import anecdoteReducer from './reducers/anecdoteReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const configureStore = () => {
    const store = createStore(anecdoteReducer, composeWithDevTools())
    return store
}

export default configureStore