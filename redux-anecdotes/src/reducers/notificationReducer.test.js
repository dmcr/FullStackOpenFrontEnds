import notificationReducer from './notificationReducer'
import deepFreeze from 'deep-freeze'

describe('notificationReducer', () => {
    test('SET_NOTIFICATION', () => {
        const state = ''
        const action = {
            type: 'SET_NOTIFICATION',
            data: 'testing'
        }
        deepFreeze(state)
        const testState = notificationReducer(state, action)
        expect(testState).toEqual('testing')
    })
    test('CLEAR_NOTIFICATION', () => {
        const state = 'testing'
        const action = {
            type: 'CLEAR_NOTIFICATION'
        }
        deepFreeze(state)
        const testState = notificationReducer(state, action)
        expect(testState).toEqual('')
    })
})

