import { useParams } from 'react-router-dom'

interface Params {
  id: string
}

function PokemonDetail() {
  const { id } = useParams<Params>()

  return (
    <div className="container pt-16 mx-auto">
      <div className="flex flex-col text-center w-full mb-5">
        <h1 className="title sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          POKEMON DETAIL
        </h1>
        <p className="subtitle lg:w-2/3 mx-auto leading-relaxed text-base">
          In this section you can see detail for a pokemon
        </p>
        <h1>{id}</h1>
      </div>
    </div>
  )
}

export default PokemonDetail
