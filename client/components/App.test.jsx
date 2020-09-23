import React from 'react'
import {render, screen} from '@testing-library/react'

import App from './App'

jest.mock('./Home.jsx', () => { return () => <h1>Home Page</h1> })

test('renders home', () => {
    render(<App />)
    let heading = screen.getAllByRole('heading')
    expect(heading[0].innerHTML).toMatch(/Home Page/)
})