import {ADD_TO_FAVOURITES, DELETE_FROM_FAVOURITES, FETCH_FAVOURITES} from '../actions'

const favourites = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      return [...state, action.recipe]
    case DELETE_FROM_FAVOURITES:
      return state.filter(item => item.id !== action.id)
    case FETCH_FAVOURITES:
      return action.favourites    
    default:
      return state
  }
}

export default favourites