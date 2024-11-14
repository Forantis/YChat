import { useState } from 'react'
import NavBar from './components/UI/NavBar/NavBar'
import LandingPage from './components/LandingPage/LandingPage'
import Footer from './components/UI/Footer/Footer'
import Button from './components/UI/Button/Button'
import Modal, {ModalHeader, ModalBody, ModalFooter} from './components/UI/Modal/Modal'


function App() {
  // State pour afficher ou non la modal
  const [showModal, setShowModal] = useState(false)

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
