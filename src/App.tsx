import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

const Home = lazy(() => import('./pages/Home/Home'))
const Pokemon = lazy(() => import('./pages/Pokemon/Pokemon'))
const PokemonDetail = lazy(() => import('./pages/PokemonDetail/PokemonDetail'))
const Movies = lazy(() => import('./pages/Movies/Movies'))
const Games = lazy(() => import('./pages/Games/Games'))

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="main" data-testid="main">
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/pokemon/:id" component={PokemonDetail} />
              <Route path="/pokemon" component={Pokemon} />
              <Route path="/movies" component={Movies} />
              <Route path="/games" component={Games} />
            </Switch>
          </Suspense>
        </main>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
