import nock from 'nock'
import { getIngredients, getRecipes, getSteps } from './index'

test('API fetches recipes from server', () => {
  nock(/localhost/)
    .get('/api/recipes')
    .reply(200, 
      {recipes: [{ id: 1, name:'Caramelised Pork & Garlic Rice'}]})

  return getRecipes()
    .then(recipes => {
      expect(recipes.length).toBe(1)
      expect(recipes[0].id).toBe(1)
    })
})

test('API fetches ingredients from the database', () => {
  nock(/localhost/)
    .get('/api/ingredients/1')
    .reply(200,
      {ingredients: [{ingredient_name: 'potatoes', ingredient_quantity: 2, recipe_id: 1}]})

    return getIngredients(1)
      .then(ingredients => {
        expect(ingredients.length).toBe(1)
        expect(ingredients[0]).toHaveProperty('recipe_id')
      })
})

test('API fetches steps from database', () => {
  nock(/localhost/)
    .get('/api/steps/1')
    .reply(200,
      {steps: [{recipe_id: 1, step_number: 4, step_desc: 'add some stuff then do something else'}]})

    return getSteps(1)
    .then(steps => {
      expect(steps.length).toBe(1)
      expect(steps[0]).toHaveProperty('step_number')
    })
})