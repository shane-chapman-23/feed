import {FETCH_MY_RECIPES, ADD_TO_MY_RECIPES, REMOVE_RECIPE} from '../actions'

const initialState = []

export default function myRecipesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MY_RECIPES:
      return action.myRecipes
    case ADD_TO_MY_RECIPES:
      return [...state, action.recipe] 
    case REMOVE_RECIPE:
      return state.filter(item => item.recipe_id !== action.recipe.id) 
    default:
      return state
  }
}

