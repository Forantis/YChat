import React, { useState } from 'react';
import Modal, { ModalHeader, ModalBody, ModalFooter } from '../../UI/Modal/Modal';
import Button from '../../UI/Button/Button';

interface SignUpModalProps {
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    setName: React.Dispatch<React.SetStateAction<string>>;
    setSurname: React.Dispatch<React.SetStateAction<string>>;
    handleRegister: () => Promise<void>;

}



const SignUpModal: React.FC<SignUpModalProps> = ({ setEmail, setPassword, setName, setSurname, handleRegister }) => {

    const [show, setShow] = useState(false);

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
                            <label htmlFor="username">Name :</label>
                            <input type="text" id="nameSignUp" name="name" required onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="username">Surname :</label>
                            <input type="text" id="surnameSignUp" name="surname" required onChange={(e) => setSurname(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="username">Email :</label>
                            <input type="email" id="emailSignUp" name="email" required onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="password">Password :</label>
                            <input type="password" id="passwordSignUp" name="password" required onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={() => handleRegister()}>S'inscrire</Button>
                    <Button onClick={() => setShow(false)}>Annuler</Button>
                </ModalFooter>
            </Modal>
        </>
    );
};

export default SignUpModal;