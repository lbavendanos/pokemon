import { act, renderHook } from '@testing-library/react-hooks'
import { getAxiosError, getAxiosResponse } from '../api/api.test'
import { Info, Pokemon, Response, usePokemon } from './pokemon'
import axios from 'axios'

const mockedAxios = axios as jest.Mocked<typeof axios>

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

beforeEach(() => {
  jest.clearAllMocks()
})

describe('Pokemon hooks', () => {
  it('call usePokemon hook', async () => {
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

  it('call usePokemon hook and call fecthPokemon with params', async () => {
    const mockData: Response = { ...mockInfo, results: mockPokemon }
    const axiosResponse = getAxiosResponse(mockData)

    mockedAxios.get.mockResolvedValueOnce(axiosResponse)

    const offset = 200
    const limit = 100
    const params = { offset, limit }
    const { result } = renderHook(() => usePokemon())

    await act(async () => {
      await result.current.fetchPokemon(params)
    })

    expect(mockedAxios.get.mock.calls[0][1]).toStrictEqual({ params })
    expect(result.current.info).toStrictEqual(mockInfo)
    expect(result.current.pokemon).toStrictEqual(mockPokemon)
  })

  it('call usePokemon hook to get error', async () => {
    const axiosError = getAxiosError()

    mockedAxios.get.mockRejectedValueOnce(axiosError)

    const { result } = renderHook(() => usePokemon())

    await act(async () => {
      await result.current.fetchPokemon()
    })

    expect(result.current.error).toStrictEqual(axiosError)
  })
})
