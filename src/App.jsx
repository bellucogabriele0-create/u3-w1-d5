import './App.css'
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import MyNavbar from "./components/MyNavbar"
import MovieSection from "./components/MovieSection"
import Footer from './components/footer'

function App() {
  return (
    <>
      <MyNavbar
        logoSrc="assets/logo.png"
        links={[
          { label: "Home", href: "#home", active: true },
          { label: "TV Shows", href: "#tvshows" },
          { label: "Movies", href: "#movies" },
          { label: "Recently Added", href: "#recent" },
          { label: "My List", href: "#list" },
        ]}
      />

      <MovieSection saga="Marvel"  title="Trending Now" />
      <MovieSection saga="godfather"  title="Trending Now" />
      <MovieSection saga="wars"  title="Trending Now" />

      <Footer />
    </>
  )
}

export default App