export const SET_RECIPES = 'SET_RECIPES'
export const ADD_RECIPES = 'ADD_RECIPES'

export function setRecipes(recipes) {
  return ({
    type: SET_RECIPES,
    recipes
  })
}