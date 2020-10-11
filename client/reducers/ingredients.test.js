import { fetchIngredients } from '../actions'
import  ingredientsReducer from './ingredients'

test('initial state is an empty array', () => {
    let state = ingredientsReducer(undefined, {})
    expect(state.length).toBe(0)
})

test('FETCH_INGREDIENTS fetches the ingredients', () => {
    let ingredients = [{ingredient_name: 'Potatoes'}]
    let action = fetchIngredients(ingredients)
    let newState = ingredientsReducer([], action)
    expect(newState).toEqual(ingredients)
})