import { render, screen, waitFor } from '@testing-library/react'
import { getAxiosResponse } from '@/hooks/api/api.test'
import { mockPokemon } from '@/hooks/pokemon/pokemon.mock'
import PokemonList from './PokemonList'
import axios from 'axios'

const mockedAxios = axios as jest.Mocked<typeof axios>

beforeEach(() => {
  jest.clearAllMocks()
})

describe('PokemonList.tsx', () => {
  it('render pokemon list', async () => {
    for (let id = 1; id <= 20; id++) {
      const mock = { ...mockPokemon, id }
      const axiosResponse = getAxiosResponse(mock)

      mockedAxios.get.mockResolvedValueOnce(axiosResponse)
    }

    render(<PokemonList />)

    await waitFor(() => {
      const cards = screen.getAllByTestId('card')

      expect(cards).toHaveLength(20)
    })
  })
})
