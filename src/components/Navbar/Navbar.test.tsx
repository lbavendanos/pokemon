import { render, screen } from '@testing-library/react'
import Navbar from './Navbar'

describe('Navbar.tsx', () => {
  it('render logo and navigation', () => {
    render(<Navbar />)

    const logo = screen.getByAltText('pokemon')

    expect(logo).toBeInTheDocument()
  })
})
