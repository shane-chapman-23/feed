import {FETCH_ALL_INGREDIENTS} from '../actions'


const initialState = []

export default function allIngredientsReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_ALL_INGREDIENTS:
            return action.allIngredients
        default:
            return state
    }
}
