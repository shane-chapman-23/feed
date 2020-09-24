import React from 'react'
import {render, screen} from '@testing-library/react'

import Home from './Home'

jest.mock('./RecipesList.jsx', () => { return () => <h1>Recipes</h1> })

test('renders heading in Home', () => {
  render(<Home />)
  let heading = screen.getAllByRole('heading')
  expect(heading[1].innerHTML).toMatch(/Recipes/)
})