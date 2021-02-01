import { act, renderHook } from '@testing-library/react-hooks'
import { getAxiosError, getAxiosResponse } from '@/hooks/api/api.test'
import { Info, Item, Response, useItems } from './items'
import axios from 'axios'

const mockedAxios = axios as jest.Mocked<typeof axios>

const mockInfo: Info = {
  count: 1118,
  next: 'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20',
  previous: null,
}
const mockItems: Item[] = [
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

describe('Item hooks', () => {
  it('call useItems hook', async () => {
    const mockData: Response = { ...mockInfo, results: mockItems }
    const axiosResponse = getAxiosResponse(mockData)

    mockedAxios.get.mockResolvedValueOnce(axiosResponse)

    const { result } = renderHook(() => useItems())

    await act(async () => {
      await result.current.fetchItems()
    })

    expect(result.current.info).toStrictEqual(mockInfo)
    expect(result.current.items).toStrictEqual(mockItems)
  })

  it('call useItems hook and call fecthPokemon with params', async () => {
    const mockData: Response = { ...mockInfo, results: mockItems }
    const axiosResponse = getAxiosResponse(mockData)

    mockedAxios.get.mockResolvedValueOnce(axiosResponse)

    const { result } = renderHook(() => useItems())
    const params = { offset: 200, limit: 100 }

    await act(async () => {
      await result.current.fetchItems(params)
    })

    expect(mockedAxios.get.mock.calls[0][1]).toStrictEqual({ params })
    expect(result.current.info).toStrictEqual(mockInfo)
    expect(result.current.items).toStrictEqual(mockItems)
  })

  it('call useItems hook to get error', async () => {
    const axiosError = getAxiosError()

    mockedAxios.get.mockRejectedValueOnce(axiosError)

    const { result } = renderHook(() => useItems())

    await act(async () => {
      await result.current.fetchItems()
    })

    expect(result.current.error).toStrictEqual(axiosError)
  })
})
