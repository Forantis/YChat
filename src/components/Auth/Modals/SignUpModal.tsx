import React, { useState } from 'react';
import Modal, { ModalHeader, ModalBody, ModalFooter } from '../../UI/Modal/Modal';
import Button from '../../UI/Button/Button';

const SignUpModal: React.FC = () => {
    const [show, setShow] = useState(false);

    const handleLogin = () => {
        // Logic for handling login
        console.log("Création de compte...");
        setShow(false);
    };

    return (
        <>
            <Button onClick={() => setShow(true)}>S'inscrire</Button>
            <Modal show={show} setShow={setShow}>
                <ModalHeader>
                    <h2>Crée un compte</h2>
                </ModalHeader>
                <ModalBody>
                    <form>
                        <div>
                            <label htmlFor="username">Email :</label>
                            <input type="email" id="emailSignUp" name="email" required />
                        </div>
                        <div>
                            <label htmlFor="password">Mot de passe :</label>
                            <input type="password" id="passwordSignUp" name="password" required />
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={handleLogin}>S'inscrire</Button>
                    <Button onClick={() => setShow(false)}>Annuler</Button>
                </ModalFooter>
            </Modal>
        </>
    );
};

export default SignUpModal;