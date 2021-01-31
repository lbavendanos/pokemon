import { act, renderHook } from '@testing-library/react-hooks'
import axios from 'axios'
import { getAxiosResponse } from '../api/api.test'
import { Info, Pokemon, Response, usePokemon } from './pokemon'

const mockedAxios = axios as jest.Mocked<typeof axios>

beforeEach(() => {
  jest.clearAllMocks()
})

describe('Pokemon hooks', () => {
  it('call usePokemon', async () => {
    const mockInfo: Info = {
      count: 1118,
      next: 'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20',
      previous: null,
    }
    const mockPokemon: Pokemon[] = [
      {
        name: 'bulbasaur',
        url: 'https://pokeapi.co/api/v2/pokemon/1/',
      },
      {
        name: 'ivysaur',
        url: 'https://pokeapi.co/api/v2/pokemon/2/',
      },
    ]
    const mockData: Response = { ...mockInfo, results: mockPokemon }
    const axiosResponse = getAxiosResponse(mockData)

    mockedAxios.get.mockResolvedValueOnce(axiosResponse)

    const { result } = renderHook(() => usePokemon())

    await act(async () => {
      await result.current.fetchPokemon()
    })

    expect(result.current.info).toStrictEqual(mockInfo)
    expect(result.current.pokemon).toStrictEqual(mockPokemon)
  })
})
