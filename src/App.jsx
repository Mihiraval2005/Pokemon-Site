import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import PokemonDetail from './pages/PokemonDetail'

 
function App() {
  return (
    <div className="max-w-5xl mx-auto p-4">
      <Link to="/" className="text-3xl font-bold text-yellow-400">
        Pokemon Explorer
      </Link>

      <Routes>
        
        <Route path="/" element={<Home />} />
        
        <Route path="/pokemon/:id" element={<PokemonDetail />} />
      </Routes>
    </div>
  )
}

export default App
