import { TYPE_COLORS, capitalize } from '../utils/format.js'

export default function TypeBadge({ type }) {
  const color = TYPE_COLORS[type] ?? 'bg-slate-500'
  return (
    <span className={`rounded-full px-3 py-1 text-xs font-semibold text-white ${color}`}>
      {capitalize(type)}
    </span>
  )
}
