import React from 'react';
import './NavBar.scss';

const NavBar: React.FC = () => {
    return (
        <div className="navbar-container">
            <div className="navbar">
                <div className="navbar-content">
                    <img src="./images/logo.png" alt="YChat logo" className=" image_logo">
                    </img> 
                </div>
                {/* <div className="navbar-links">
                    <span className="navbar-link">Fonctionnalités</span>
                    <span className="navbar-link">Aide</span>
                    <span className="navbar-link">CGU</span>
                </div> */}
                
            </div>
        </div>
    );
};

export default NavBar;
