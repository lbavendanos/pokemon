import { act, renderHook } from '@testing-library/react-hooks'
import { getAxiosError, getAxiosResponse } from '@/hooks/api/api.test'
import { usePokemon } from './pokemon'
import { mockPokemon } from './pokemon.mock'
import axios from 'axios'

const mockedAxios = axios as jest.Mocked<typeof axios>

beforeEach(() => {
  jest.clearAllMocks()
})

describe('Pokemon hooks', () => {
  it('call usePokemon', async () => {
    const axiosResponse = getAxiosResponse(mockPokemon)

    mockedAxios.get.mockResolvedValueOnce(axiosResponse)

    const { result } = renderHook(() => usePokemon())
    const spyFetchPokemon = jest.spyOn(result.current, 'fetchPokemon')
    const id = 1

    await act(async () => {
      await result.current.fetchPokemon(id)
    })

    expect(spyFetchPokemon).toHaveBeenCalledWith(id)
    expect(result.current.pokemon).toStrictEqual(mockPokemon)
  })

  it('call usePokemon hook to get error', async () => {
    const axiosError = getAxiosError()

    mockedAxios.get.mockRejectedValueOnce(axiosError)

    const { result } = renderHook(() => usePokemon())
    const id = 1

    await act(async () => {
      await result.current.fetchPokemon(id)
    })

    expect(result.current.error).toStrictEqual(axiosError)
  })
})
