import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="py-20 text-center">
      <h1 className="mb-2 text-5xl font-extrabold text-yellow-400">404</h1>
      <p className="mb-6 text-slate-400">This page ran away like a wild Pokemon.</p>
      <Link to="/" className="font-semibold text-yellow-400 hover:text-yellow-300">
        ← Go back home
      </Link>
    </div>
  )
}
