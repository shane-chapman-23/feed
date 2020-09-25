import {combineReducers} from 'redux'

import recipesReducer from './recipes'
import ingredientsReducer from './ingredients'
import stepsReducer from './steps'

export default combineReducers({
    recipes: recipesReducer,
    ingredients: ingredientsReducer,
    steps: stepsReducer
})
