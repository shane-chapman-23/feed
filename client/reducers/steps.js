import {FETCH_STEPS} from '../actions'

const initialState = []

export default function stepsReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_STEPS:
            return action.steps
        default:
            return state
    }
}