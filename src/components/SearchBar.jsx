export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative mx-auto mb-8 w-full max-w-xl">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search Pokemon by name..."
        aria-label="Search Pokemon by name"
        className="w-full rounded-full border border-slate-700 bg-slate-900/80 px-6 py-3 pr-12 text-slate-100 placeholder-slate-500 shadow-lg outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30"
      />
      {value && (
        <button
          onClick={() => onChange('')}
          aria-label="Clear search"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
        >
          ✕
        </button>
      )}
    </div>
  )
}
