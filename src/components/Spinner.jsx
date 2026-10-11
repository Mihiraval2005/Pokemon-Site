export default function Spinner({ label = 'Loading...' }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-20" role="status">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-slate-600 border-t-yellow-400" />
      <p className="text-slate-400">{label}</p>
    </div>
  )
}
