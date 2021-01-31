import axios, { AxiosRequestConfig } from 'axios'

const axiosRequestConfig: AxiosRequestConfig = {
  baseURL: 'https://pokeapi.co/api/v2',
}

const instance = createInstance(axiosRequestConfig)

function createInstance(config?: AxiosRequestConfig) {
  return axios.create(config)
}

export default instance
