
import './App.css'
import React from 'react'
import { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import Navbar from "./components/Navbar"
import MovieSection from "./components/MovieSection"
import Footer from './components/footer'

function App() {

  return (
    <>
<Navbar
        logoSrc="assets/logo.png"
        links={[
          { label: "Home", href: "#home", active: true },
          { label: "About", href: "#about" },
          { label: "Services", href: "#services" },
          { label: "Contact", href: "#contact" },
        ]}
      />
      <MovieSection />
      <Footer />    </>
  )
}

export default App
