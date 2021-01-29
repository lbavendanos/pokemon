import { render, screen } from '@testing-library/react'
import App from './App'

describe('App.tsx', () => {
  it('render main section', () => {
    render(<App />)

    const main = screen.getByTestId('main')

    expect(main).toBeInTheDocument()
  })
})
