import { fetchSteps } from '../actions'
import stepsReducer from './steps'

test('initial state is an empty array', () => {
    let state = stepsReducer(undefined, {})
    expect(state.length).toBe(0)
})

test('FETCH_STEPS fetches the steps', () => {
    let steps = [{step_desc: 'Put in the overn for 10 hours'}]
    let action = fetchSteps(steps)
    let newState = stepsReducer([], action)
    expect(newState).toEqual(steps)
})