import {combineReducers} from 'redux'

import recipesReducer from './recipes'
import ingredientsReducer from './ingredients'
import allIngredientsReducer from './allIngredients'
import stepsReducer from './steps'
import shoppingListReducer from './shoppingList'


export default combineReducers({
    recipes: recipesReducer,
    ingredients: ingredientsReducer,
    steps: stepsReducer,
    shoppingList: shoppingListReducer,
    allIngredients: allIngredientsReducer
    
})