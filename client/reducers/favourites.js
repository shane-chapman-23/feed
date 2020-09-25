import {ADD_TO_FAVOURITES, DELETE_FROM_FAVOURITES} from '../actions'

const favourites = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      return [...state, action.recipe]
    case DELETE_FROM_FAVOURITES:
      return state.filter(item => item.id !== action.id)
    default:
      return state
  }
}

export default favourites