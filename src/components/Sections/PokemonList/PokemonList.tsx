import { useEffect, useState } from 'react'
import { Pokemon } from '@/hooks/pokemon/pokemon'
import Card, { Props } from '@/components/Card/Card'
import axios from '@/utils/axios'

function PokemonList() {
  const [items, setItems] = useState<Pokemon[]>([])

  const loadPokemon = async () => {
    for (let index = 1; index <= 20; index++) {
      const url = `/pokemon/${index}`
      const { data } = await axios.get<Pokemon>(url)

      setItems((items) => [...items, data])
    }
  }

  const getCardProps = (item: Pokemon): Props => {
    return {
      name: item.name,
      image: {
        src: item.sprites.other?.dream_world.front_default || '',
        alt: item.name,
      },
      description: `Weigth: ${item.weight}, Height: ${item.height}`,
    }
  }

  const listCard = () => {
    return items.map((item: Pokemon) => (
      <div
        key={item.id}
        data-testid="card"
        className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
      >
        <Card {...getCardProps(item)} />
      </div>
    ))
  }

  useEffect(() => {
    loadPokemon()
  }, [])

  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -m-4">{listCard()}</div>
    </div>
  )
}

export default PokemonList
