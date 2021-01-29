import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('Footer.tsx', () => {
  it('render creator', () => {
    render(<Footer />)

    const creator = '© 2021 lbavendanos'
    const footer = screen.getByText(creator)

    expect(footer).toBeInTheDocument()
  })
})
