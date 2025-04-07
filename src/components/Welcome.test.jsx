import { render, screen } from '@testing-library/react'
import Welcome from './Welcome'

test('Welcome.jsx viene caricato correttamente', () => {
  const { getByText } = render(<Welcome />)
  expect(getByText(/benvenuto su EpiBooks/i)).toBeInTheDocument()
})