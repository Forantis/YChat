import React from 'react';
import './NavBar.scss';
import Button from '../Button/Button';

const NavBar: React.FC = () => {
    return (
        <div className="navbar-container">
            <div className="navbar">
                <div className="navbar-content">
                    <div className="navbar-links">
                        <span className="navbar-link">Fonctionnalités</span>
                        <span className="navbar-link">Aide</span>
                        <span className="navbar-link">CGU</span>
                    </div>
                    <Button onClick={() => console.log('Connexion button clicked')}>Connexion</Button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
