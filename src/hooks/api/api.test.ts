import axios, { AxiosError, AxiosResponse } from 'axios'
import { renderHook, act } from '@testing-library/react-hooks'
import { useApiGet } from './api'

const mockedAxios = axios as jest.Mocked<typeof axios>

interface MockData {
  company: string
  country: string
}

export function getAxiosResponse<T>(data: T): AxiosResponse<T> {
  return {
    data,
    status: 200,
    statusText: 'Ok',
    headers: {},
    config: {},
  }
}

export function getAxiosError(): AxiosError {
  return {
    config: {},
    isAxiosError: true,
    message: 'Not found resource',
    name: 'AxiosError',
    toJSON: () => ({}),
    code: '404',
  }
}

beforeEach(() => {
  jest.clearAllMocks()
})

describe('Api hooks', () => {
  it('call useApiGet hook to request data', async () => {
    const mockData: MockData = {
      company: 'Crooks, Schiller and Swaniawski',
      country: 'Denmark',
    }
    const axiosResponse = getAxiosResponse(mockData)

    mockedAxios.get.mockResolvedValueOnce(axiosResponse)

    const url = '/foo'
    const { result } = renderHook(() => useApiGet<MockData>())

    await act(async () => {
      await result.current.request(url)
    })

    expect(result.current.response).toStrictEqual(mockData)
    expect(result.current.error).toBeNull()
  })

  it('call useApiGet hook to get error', async () => {
    const axiosError = getAxiosError()

    mockedAxios.get.mockRejectedValueOnce(axiosError)

    const url = '/foo'
    const { result } = renderHook(() => useApiGet<MockData>())

    await act(async () => {
      await result.current.request(url)
    })

    expect(result.current.error).toStrictEqual(axiosError)
  })
})
