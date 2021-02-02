import { render, screen } from '@testing-library/react'
import Pokemon from './Pokemon'

describe('Pokemon page', () => {
  it('render', () => {
    render(<Pokemon />)

    const title = screen.getByText('POKEMON')
    const subtitle = screen.getByText(
      'In this section you can search for a pokemon'
    )

    expect(title).toBeInTheDocument()
    expect(subtitle).toBeInTheDocument()
  })
})
