import { Link } from 'react-router-dom'
 
function PokemonCard({ pokemon }) {
  return (
    <Link
      to={`/pokemon/${pokemon.id}`}
      className="bg-slate-800 rounded-xl p-4 text-center hover:scale-105 transition"
    >
      <img src={pokemon.image} alt={pokemon.name} className="w-32 h-32 mx-auto" />
      <h2 className="capitalize font-bold mt-2">{pokemon.name}</h2>
    </Link>
  )
}

export default PokemonCard
