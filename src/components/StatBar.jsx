import { formatName } from '../utils/format.js'

const MAX_STAT = 255

export default function StatBar({ name, value }) {
  const percent = Math.min((value / MAX_STAT) * 100, 100)
  return (
    <div className="flex items-center gap-3">
      <span className="w-32 shrink-0 text-sm text-slate-400">{formatName(name)}</span>
      <span className="w-10 shrink-0 text-right text-sm font-semibold">{value}</span>
      <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-800">
        <div
          className="h-full rounded-full bg-gradient-to-r from-yellow-400 to-orange-500"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}
