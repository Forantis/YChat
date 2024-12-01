import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.scss';
import LogInModal from '../Auth/Modals/LogInModal';
import SignUpModal from '../Auth/Modals/SignUpModal';
import { api } from '../../../convex/_generated/api';
import { useMutation } from "convex/react";


const LandingPage: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const navigate = useNavigate();

    const register = useMutation(api.users.register);
    const authentication = useMutation(api.users.authentication);

    async function handleRegister() {
        const date = new Date().toISOString();
        const created_at = `${date}`;
        const role = "user";
        const tokenIdentifier = `${Math.floor(Math.random() * 1000000000)}`;
        const public_uuid = (Math.floor(Math.random() * 1000)); // To be replaced by a real UUID generator
        await register({ 
            public_uuid, 
            email, 
            password, 
            name, 
            surname, 
            created_at, 
            tokenIdentifier, 
            role });
        localStorage.setItem('tokenIdentifier', tokenIdentifier);
        localStorage.setItem('public_uuid', public_uuid.toString());
        navigate('/app');
    }

    async function handleLogin() {
        const users = await authentication({ email, password });
        if (users.length > 0) {
            const tokenIdentifier = `${Math.floor(Math.random() * 1000000000)}`;
            localStorage.setItem('tokenIdentifier', tokenIdentifier);
            localStorage.setItem('public_uuid', users[0].public_uuid.toString());
            navigate('/app');
        }
    }

    return (
        <div className="landing-page">
            <div className='landing-page__background'>
                <img src="./images/Image_LP.png" alt="YChat logo" className="images_LP">
                </img> 
            </div>  
            <div className="landing-page__titre">
                <h1>Bienvenue sur YChat</h1>
                <p>Connectez-vous avec vos amis et votre famille.</p>
                <SignUpModal setEmail={setEmail} setPassword={setPassword} setName={setName} setSurname={setSurname} handleRegister={handleRegister} />
                <LogInModal setEmail={setEmail} setPassword={setPassword} handleLogin={handleLogin} />
                <section className="landing-page__features">
                    <h2>Fonctionnalités</h2>
                    <ul>
                        <li>Messagerie instantanée</li>
                        <li>Groupes de discussion</li>
                        <li>Partage de photos et de messages vocaux</li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default LandingPage;