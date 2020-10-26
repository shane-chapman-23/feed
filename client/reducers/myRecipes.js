import {FETCH_MY_RECIPES, ADD_TO_MY_RECIPES} from '../actions'

const initialState = []

export default function myRecipesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MY_RECIPES:
      return action.myRecipes
    case ADD_TO_MY_RECIPES:
      return [...state, action.recipe]  
    default:
      return state
  }
}

