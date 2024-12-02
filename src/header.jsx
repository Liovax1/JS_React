import React from 'react';

const Header = () => {
    const isAuthenticated = false;
  return (
    <header>
      <nav>
        <a href="/">Accueil</a>
      </nav>

        {isAuthenticated ? <p>Vous êtes connecté !</p> : <p>Vous n'êtes pas connecté !</p>}
    </header>
  );
};

export default Header;