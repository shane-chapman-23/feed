import React from 'react'
import {render, screen} from '@testing-library/react'

import Recipes from './Recipes'

let tempRecipes = [
  {id: 1, name: 'Curry', URL: "Insert Url", info: 'Truly exquisite'},
  {id: 2, name: 'Chicken', URL: "Insert Url", info: 'NomNom'}
]

test('displays tempRecipes', () => {
  render(<Recipes />)
  expect(tempRecipes.length).toBe(2)
  expect(tempRecipes[0].name).toMatch(/Curry/)
})