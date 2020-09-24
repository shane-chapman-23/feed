import {FETCH_RECIPES} from '../actions'

const initialState = []

export default function recipeReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_RECIPES:
            return action.recipes
        default:
            return state
    }
}