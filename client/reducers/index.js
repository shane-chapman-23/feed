import {combineReducers} from 'redux'

import recipesReducer from './recipes'
import ingredientsReducer from './recipes'
import stepsReducer from './recipes'
import favouriteReducer from './favourites'
import currentPageReducer from './currentPage'

export default combineReducers({
    currentPage: currentPageReducer,
    recipes: recipesReducer,
    ingredients: ingredientsReducer,
    steps: stepsReducer,
    favourite: favouriteReducer
})
