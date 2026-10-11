const BASE_URL = 'https://pokeapi.co/api/v2'

async function request(path, signal) {
  const res = await fetch(`${BASE_URL}${path}`, { signal })
  if (!res.ok) {
    const error = new Error(
      res.status === 404 ? 'Pokemon not found' : `Request failed (${res.status})`,
    )
    error.status = res.status
    throw error
  }
  return res.json()
}


export function getIdFromUrl(url) {
  const parts = url.split('/').filter(Boolean)
  return Number(parts[parts.length - 1])
}

export function getImageUrl(id) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
}

 
export async function fetchAllPokemon(signal) {
  const data = await request('/pokemon?limit=100000&offset=0', signal)
  return data.results
    .map((p) => ({ id: getIdFromUrl(p.url), name: p.name }))
   
    .filter((p) => p.id < 10000)
}

export function fetchPokemonDetail(id, signal) {
  return request(`/pokemon/${encodeURIComponent(id)}`, signal)
}
