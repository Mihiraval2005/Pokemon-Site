import { useState, useEffect } from 'react'
import PokemonCard from '../components/PokemonCard'

function Home() {
   
  const [pokemons, setPokemons] = useState([])  
  const [search, setSearch] = useState('')      
  const [loading, setLoading] = useState(true) 
  const [error, setError] = useState('')        

 
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((res) => res.json())
      .then((data) => {
        
        const list = data.results.map((item) => {
          const id = item.url.split('/')[6]
          return {
            id: id,
            name: item.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
          }
        })
        setPokemons(list)
        setLoading(false)
      })
      .catch(() => {
        setError('Could not load Pokemon. Please try again.')
        setLoading(false)
      })
  }, [])

 
  const filtered = pokemons.filter((p) =>
    p.name.includes(search.toLowerCase())
  )

 
  if (loading) return <p className="mt-10 text-center">Loading...</p>
  if (error) return <p className="mt-10 text-center text-red-400">{error}</p>

  return (
    <div>
      <input
        type="text"
        placeholder="Search Pokemon..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full my-6 p-3 rounded-full bg-slate-800 outline-none"
      />

      {filtered.length === 0 && <p className="text-center">No Pokemon found.</p>}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {filtered.map((p) => (
          <PokemonCard key={p.id} pokemon={p} />
        ))}
      </div>
    </div>
  )
}

export default Home
