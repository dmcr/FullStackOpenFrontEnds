import deepFreeze from 'deep-freeze'
import filterReducer from './filterReducer'

describe('filterReducer', () => {
    test('SET_FILTER', () => {
        const state = ''
        const action = {
            type: 'SET_FILTER',
            data: 'testing'
        }
        deepFreeze(state)
        const testState = filterReducer(state, action)
        expect(testState).toBe('testing')
    })
    test('CLEAR_FILTER', () => {
        const state = 'testing'
        const action = {
            type: 'CLEAR_FILTER'
        }
        deepFreeze(state)
        const testState = filterReducer(state, action)
        expect(testState).toBe('')
    })
})