// import React from 'react'
// import { render, screen, waitFor } from '@testing-library/react'
// import { Provider } from 'react-redux'

// import store from '../store'
// import RecipeInfoList from './RecipeInfoList'
// import { getIngredients } from '../api'


// jest.mock('../api', () => ({
//   getIngredients: jest.fn()

// }))

// jest.spyOn(store, 'getState')

// let ingredients = [
//     {id: 1, ingredient_name:'Pork'},
//     {id: 2, ingredient_name:'Rice'},
//     {id: 3, ingredient_name:'Beef'},
//     {id: 4, ingredient_name:'Chicken'},
//     {id: 5, ingredient_name:'Onion'},
//     {id: 6, ingredient_name:'Lettuce'}
// ]

// beforeEach(() => {
//     store.getState.mockImplementation(() => ({ ingredients }))
//     getIngredients.mockImplementation(() => Promise.resolve(ingredients))
// })
// test("displays ingredient", async () => {
//     render(<Provider store={store}><RecipeInfoList /></Provider>)
//     await waitFor(() => getIngredients.mock.calls.length > 0)
//     const ingredients = screen.getAllByRole('listitem')
//     expect(ingredients.length).toBe(6)
// })