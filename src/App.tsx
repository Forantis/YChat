import { useState } from 'react'
import NavBar from './components/UI/NavBar/NavBar'
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
      <div className="container">
        <h1>Page d'accueil</h1>
        <p>Bienvenue sur notre site !</p>
        <Button onClick={() => setShowModal(true)}>Ouverture Modal</Button>
        <Modal show={showModal} setShow={setShowModal}>
          <ModalHeader>
            <h2>Header du Modal</h2>
          </ModalHeader>
          <ModalBody>
              <p>Contenu de la modal</p>
          </ModalBody>
          <ModalFooter>
              <Button onClick={() => setShowModal(false)}>Fermer</Button>
          </ModalFooter>
        </Modal>
      </div>
      <Footer />  
    </>
  )
}

export default App
