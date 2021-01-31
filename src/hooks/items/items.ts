import { useState } from 'react'
import axios from '../../utils/axios'

export type Response = Info & { results: Item[] }

export interface Info {
  count: number
  next: string | null
  previous: string | null
}

export interface Item {
  name: string
  url: string
}

export function useItems() {
  const [info, setInfo] = useState<Info>()
  const [items, setItems] = useState<Item[]>()
  const [error, setError] = useState(null)

  const fetchItems = async (params?: object) => {
    try {
      const url = '/pokemon'
      const config = { params }
      const { data } = await axios.get<Response>(url, config)

      setInfo({
        count: data.count,
        next: data.next,
        previous: data.previous,
      })

      setItems(data.results)
    } catch (e) {
      setError(e)
    }
  }

  return { info, items, error, fetchItems }
}
