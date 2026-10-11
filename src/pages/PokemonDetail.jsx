import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

function PokemonDetail() {
  const { id } = useParams()  
  const [pokemon, setPokemon] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

   
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Not found')
        return res.json()
      })
      .then((data) => {
        setPokemon(data)
        setLoading(false)
      })
      .catch(() => {
        setError('Pokemon not found.')
        setLoading(false)
      })
  }, [id])

  if (loading) return <p className="mt-10 text-center">Loading...</p>
  if (error) return <p className="mt-10 text-center text-red-400">{error}</p>

  return (
    <div className="mt-6">
      <Link to="/" className="text-yellow-400">← Back</Link>

       
      <div className="text-center">
        <h1 className="text-4xl font-bold capitalize">{pokemon.name}</h1>
        <img
          src={pokemon.sprites.other['official-artwork'].front_default}
          alt={pokemon.name}
          className="w-64 h-64 mx-auto"
        />
      </div>

    
      <h2 className="text-xl font-bold mt-4 mb-2">Types</h2>
      <div className="flex gap-2">
        {pokemon.types.map((t) => (
          <span key={t.type.name} className="bg-yellow-400 text-black px-3 py-1 rounded-full capitalize">
            {t.type.name}
          </span>
        ))}
      </div>

     
      <h2 className="text-xl font-bold mt-4 mb-2">Abilities</h2>
      <div className="flex gap-2 flex-wrap">
        {pokemon.abilities.map((a) => (
          <span key={a.ability.name} className="bg-slate-700 px-3 py-1 rounded-full capitalize">
            {a.ability.name}
          </span>
        ))}
      </div>

      
      <h2 className="text-xl font-bold mt-4 mb-2">Stats</h2>
      {pokemon.stats.map((s) => (
        <div key={s.stat.name} className="mb-2">
          <p className="capitalize text-sm">{s.stat.name}: {s.base_stat}</p>
          <div className="bg-slate-700 rounded h-2">
            <div
              className="bg-yellow-400 h-2 rounded"
              style={{ width: `${(s.base_stat / 200) * 100}%` }}
            ></div>
          </div>
        </div>
      ))}

      
      <h2 className="text-xl font-bold mt-4 mb-2">Moves</h2>
      <div className="flex gap-2 flex-wrap">
        {pokemon.moves.map((m) => (
          <span key={m.move.name} className="bg-slate-800 px-2 py-1 rounded text-sm capitalize">
            {m.move.name}
          </span>
        ))}
      </div>
    </div>
  )
}

export default PokemonDetail
