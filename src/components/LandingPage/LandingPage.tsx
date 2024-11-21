import React from 'react';
import './LandingPage.scss';
import LogInModal from '../Auth/Modals/LogInModal';
import SignUpModal from '../Auth/Modals/SignUpModal';

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
                <SignUpModal />
                <LogInModal />
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