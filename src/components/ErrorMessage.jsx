export default function ErrorMessage({ message, onRetry }) {
  return (
    <div className="mx-auto max-w-md rounded-xl border border-red-500/40 bg-red-500/10 p-6 text-center">
      <p className="mb-4 text-red-300">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="rounded-lg bg-red-500 px-4 py-2 font-semibold text-white hover:bg-red-400"
        >
          Try again
        </button>
      )}
    </div>
  )
}
