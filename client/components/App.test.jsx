import React from 'react'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'
import store from '../store'

import App from './App'

jest.mock('./Home.jsx', () => { return () => <h1>Home Page</h1> })

test('renders home', () => {
  render(<Provider store={store}><App /></Provider>)
  let heading = screen.getAllByRole('heading')
  expect(heading[0].innerHTML).toMatch(/Home Page/)
})

test('displays a list of recipe names', () => {
  render(<Provider store={store}><App /></Provider>)
  let recipes = screen.getAllByRole('listitem')
  expect(recipes.length).toBe(2)
  expect(recipes[0].innerHTML).toMatch(/curry/)
})