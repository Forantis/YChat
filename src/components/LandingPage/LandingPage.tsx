import React from 'react';
import './LandingPage.scss';
import Button from '../UI/Button/Button';

const LandingPage: React.FC = () => {
    return (

        <div className="landing-page">
            <div className='landing-page__background'>
                <img src="./images/Image_LP.png" alt="YChat logo" className="images_LP">
                </img> 
            </div>  
            <div className="landing-page__titre">
                <h1>Bienvenue sur YChat</h1>
                <p>Connectez-vous avec vos amis et votre famille.</p>
                <Button onClick={() => console.log('Inscription button clicked')}>Inscription</Button>
                <Button onClick={() => console.log('Connexion button clicked')}>Connexion</Button>
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