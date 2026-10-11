export function capitalize(text = '') {
  return text.charAt(0).toUpperCase() + text.slice(1)
}


export function formatName(text = '') {
  return text.split('-').map(capitalize).join(' ')
}

export function padId(id) {
  return `#${String(id).padStart(4, '0')}`
}

export const TYPE_COLORS = {
  normal: 'bg-stone-500',
  fire: 'bg-orange-500',
  water: 'bg-blue-500',
  electric: 'bg-yellow-500 text-slate-900',
  grass: 'bg-green-500',
  ice: 'bg-cyan-400 text-slate-900',
  fighting: 'bg-red-700',
  poison: 'bg-purple-500',
  ground: 'bg-amber-600',
  flying: 'bg-indigo-400',
  psychic: 'bg-pink-500',
  bug: 'bg-lime-500 text-slate-900',
  rock: 'bg-yellow-700',
  ghost: 'bg-violet-700',
  dragon: 'bg-indigo-600',
  dark: 'bg-neutral-700',
  steel: 'bg-slate-400 text-slate-900',
  fairy: 'bg-rose-400',
}
