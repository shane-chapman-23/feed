import React from 'react'
import { render, screen } from '@testing-library/react'

import App from './App'

test('displays a list of recipe names', () => {
  render(<App />)
  let recipes = screen.getAllByRole('listitem')
  expect(recipes.length).toBe(4)
  expect(recipes[0].innerHTML).toMatch(/beef stirfry/)
})