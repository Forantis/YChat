//import { useState } from 'react'
import NavBar from './components/UI/NavBar/NavBar'
import Footer from './components/UI/Footer/Footer'
import './App.css'

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1>Page d'accueil</h1>
        <p>Bienvenue sur notre site !</p>
      </div>
      <Footer />
    </>
  )
}

export default App
