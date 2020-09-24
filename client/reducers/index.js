import {combineReducers} from 'redux'

import recipesReducer from './recipes'
import ingredientsReducer from './recipes'
import stepsReducer from './recipes'

export default combineReducers({
    recipes: recipesReducer,
    recipesReducer,
    ingredientsReducer,
    stepsReducer
})
