import { useState } from 'react'
import axios from '../../utils/axios'

export type Response = Info & { results: Pokemon[] }

export interface Info {
  count: number
  next: string | null
  previous: string | null
}

export interface Pokemon {
  name: string
  url: string
}

export function usePokemon() {
  const [info, setInfo] = useState<Info>()
  const [pokemon, setPokemon] = useState<Pokemon[]>()
  const [error, setError] = useState(null)

  const fetchPokemon = async (params?: object) => {
    try {
      const config = { params }
      const { data } = await axios.get<Response>('/pokemon', config)

      setInfo({
        count: data.count,
        next: data.next,
        previous: data.previous,
      })

      setPokemon(data.results)
    } catch (e) {
      setError(e)
    }
  }

  return { info, pokemon, error, fetchPokemon }
}
