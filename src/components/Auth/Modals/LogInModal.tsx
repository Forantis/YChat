import React, { useState } from 'react';
import Modal, { ModalHeader, ModalBody, ModalFooter } from '../../UI/Modal/Modal';
import Button from '../../UI/Button/Button';

const LogInModal: React.FC = ({ setEmail, setPassword, handleLogin }: any) => {
    const [show, setShow] = useState(false);

    return (
        <>
            <Button onClick={() => setShow(true)}>Se connecter</Button>
            <Modal show={show} setShow={setShow}>
                <ModalHeader>
                    <h2>Se connecter</h2>
                </ModalHeader>
                <ModalBody>
                    <form>
                        <div>
                            <label htmlFor="username">Email :</label>
                            <input type="email" id="emailLogIn" name="email" required onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="password">Mot de passe :</label>
                            <input type="password" id="passwordLogIn" name="password" required onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={handleLogin}>Se connecter</Button>
                    <Button onClick={() => setShow(false)}>Annuler</Button>
                </ModalFooter>
            </Modal>
        </>
    );
};

export default LogInModal;