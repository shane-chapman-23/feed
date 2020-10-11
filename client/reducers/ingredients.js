import {FETCH_INGREDIENTS} from '../actions'

const initialState = []

export default function ingredientsReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_INGREDIENTS:
            return action.ingredients
        default:
            return state
    }
}

