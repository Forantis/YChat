import { useState } from 'react'
import NavBar from './components/UI/NavBar/NavBar'
import LandingPage from './components/LandingPage/LandingPage'
import Footer from './components/UI/Footer/Footer'
import './App.scss'


function App() {
  // Rendu de l'application
  return (
    <>
      <NavBar />
      <LandingPage />
      <Footer />
    </>
  )
}

export default App
