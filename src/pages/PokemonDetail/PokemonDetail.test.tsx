import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route } from 'react-router-dom'
import PokemonDetail from './PokemonDetail'

describe('PokemonDetail page', () => {
  it('render', () => {
    const id = 1
    render(
      <MemoryRouter initialEntries={[`/${id}`]}>
        <Route path="/:id">
          <PokemonDetail />
        </Route>
      </MemoryRouter>
    )

    const content = screen.getByText(id)

    expect(content).toBeInTheDocument()
  })
})
