import {combineReducers} from 'redux'

import recipesReducer from './recipes'
import ingredientsReducer from './ingredients'
import allIngredientsReducer from './allIngredients'
import stepsReducer from './steps'
import myRecipesReducer from './myRecipes'


export default combineReducers({
    recipes: recipesReducer,
    ingredients: ingredientsReducer,
    steps: stepsReducer,
    myRecipes: myRecipesReducer,
    allIngredients: allIngredientsReducer
    
})