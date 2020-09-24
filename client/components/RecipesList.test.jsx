import React from 'react'
import { Provider } from 'react-redux'
import {render, screen} from '@testing-library/react'
import store from '../store'

import RecipesList from './RecipeList'

let tempRecipes = [
  {id: 1, name: 'Curry', URL: "Insert Url", info: 'Truly exquisite'},
  {id: 2, name: 'Chicken', URL: "Insert Url", info: 'NomNom'}
]

test('displays tempRecipes', () => {
  render(<Provider store={store}><RecipesList /></Provider>)
  expect(tempRecipes.length).toBe(2)
  expect(tempRecipes[0].name).toMatch(/Curry/)
})