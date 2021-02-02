import PokemonList from '@/components/Sections/PokemonList/PokemonList'

function Pokemon() {
  return (
    <div className="container pt-16 mx-auto">
      <div className="flex flex-col text-center w-full mb-5">
        <h1 className="title sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          POKEMON
        </h1>
        <p className="subtitle lg:w-2/3 mx-auto leading-relaxed text-base">
          In this section you can search for a pokemon
        </p>
      </div>
      <PokemonList />
    </div>
  )
}

export default Pokemon
