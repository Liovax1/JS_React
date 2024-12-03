import React from 'react';

const Header = () => {
    const isAuthenticated = false;
    return (
        <header>
            <nav>
                <a href="/">Accueil</a>
            </nav>
            <p className="auth-status">
                {isAuthenticated ? 'Vous êtes connecté !' : 'Vous n\'êtes pas connecté !'}
            </p>
        </header>
    );
};

export default Header;