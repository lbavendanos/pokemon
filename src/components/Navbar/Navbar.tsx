import React from 'react'
import { Link } from 'react-router-dom'
import logo from '@/assets/logo.png'

function Navbar() {
  return (
    <header className="sticky z-40 top-0 bg-red-500 text-gray-200 border-b-2 border-gray-50">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="logo flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <div className="w-28">
            <img src={logo} className="object-fill" alt="pokemon" />
          </div>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/pokemon" className="nav-item mr-5 hover:text-gray-900">
            Pokemon
          </Link>
          <Link to="/movies" className="nav-item mr-5 hover:text-gray-900">
            Movies
          </Link>
          <Link to="/games" className="nav-item mr-5 hover:text-gray-900">
            Games
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
