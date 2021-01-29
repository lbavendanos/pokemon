import { render, screen } from '@testing-library/react'
import Navbar from './Navbar'

describe('Navbar.tsx', () => {
  it('render logo and navigation', () => {
    render(<Navbar />)

    const logo = screen.getByAltText('pokemon')
    const pokemon = screen.getByText(/pokemon/i)
    const movies = screen.getByText(/movies/i)
    const games = screen.getByText(/games/i)

    expect(logo).toBeInTheDocument()
    expect(pokemon).toHaveAttribute('href', '/pokemon')
    expect(movies).toHaveAttribute('href', '/movies')
    expect(games).toHaveAttribute('href', '/games')
  })
})
