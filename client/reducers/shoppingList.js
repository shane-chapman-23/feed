import {FETCH_LIST, ADD_TO_LIST, REMOVE_LIST} from '../actions'

const initialState = []

export default function shoppingListReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_LIST:
      return action.shoppingList    
    default:
      return state
  }
}

