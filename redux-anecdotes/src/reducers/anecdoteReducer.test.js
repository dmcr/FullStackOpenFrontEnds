import annecdoteReducer from './anecdoteReducer'
import deepFreeze from 'deep-freeze'

describe('annecdoteReducer', () => {
    test('returns new state with action NEW_ANNECDOTE', () => {
        const state = []
        const action = {
            type: 'NEW_ANECDOTE',
            data: 'the app state is in redux store'
        }

        deepFreeze(state)
        const newState = annecdoteReducer(state, action)

        expect(newState).toHaveLength(1)
        expect(newState[0].content).toBe('the app state is in redux store')
        expect(newState[0].votes).toBe(0)
    })
    test('returns new state with action NEW_VOTE', () => {
        const initialState = {
            content: 'the app state is in redux store',
            id: 1,
            votes: 0
        }
        const action = {
            type: 'NEW_VOTE',
            data: {
                id: 1
            }
        }
        const state = [
            initialState
        ]
        deepFreeze(state)
        const testState = annecdoteReducer(state, action)
        expect(testState).toHaveLength(1)
        expect(testState[0].votes).toBe(1)
    })
})