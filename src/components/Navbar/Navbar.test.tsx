import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Navbar from './Navbar'

describe('Navbar.tsx', () => {
  it('render logo and navigation', () => {
    render(<Navbar />, { wrapper: MemoryRouter })

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
