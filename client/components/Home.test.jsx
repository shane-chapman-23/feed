import React from 'react'
import {render, screen} from '@testing-library/react'

import Home from './Home'

jest.mock('./Recipes.jsx', () => { return () => <h1>Recipes</h1> })

test('renders Recipes', () => {
  render(<Home />)
  let heading = screen.getAllByRole('heading')
  expect(heading[0].innerHTML).toMatch(/Recipes/)
})