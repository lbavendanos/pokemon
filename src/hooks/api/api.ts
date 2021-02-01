import { AxiosRequestConfig } from 'axios'
import { useState } from 'react'
import axios from '@/utils/axios'

export function useApiGet<T>() {
  const [response, setResponse] = useState<T>()
  const [error, setError] = useState(null)

  const request = async (url: string, config?: AxiosRequestConfig) => {
    try {
      const { data } = await axios.get<T>(url, config)
      setResponse(data)
    } catch (e) {
      setError(e)
    }
  }

  return { response, error, request }
}
