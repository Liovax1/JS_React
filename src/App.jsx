import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './header' //On importe le composant Header
import Footer from './footer' //On importe le composant Footer
import ShowPokemon from './ShowPokemon' //On importe le composant ShowPokemon
import ListPokemons from './ListPokemons'
import Faq from './Faq'
import Message from './Message';

function App() {

  const handleClick = () => { {/* On créer une fonction handleClick qui affiche un message dans la console quand on clique sur le bouton */}
    console.log('Bouton cliqué !');
  }

  const name = 'Liova'; //On déclare notre variable name

  return (
    <>
      <Header /> {/* On affiche le composant Header sur la page */}
      <main>
        <h1>Bienvenue !</h1>
        <h3>Prise en main du fichier "App.jsx"</h3>
        <small>Le logo React est beau, n'est ce pas ?</small>
        <br></br><br></br>
        <img src={reactLogo} alt="React Logo" width="100" />
        <br></br>
        <small>Pingouin de Linux</small>
        <br></br><br></br>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/800px-Tux.svg.png' width={100} height={100}></img>
        <br></br><br></br>
        <button onClick={handleClick}>Cliquez-moi</button> {/* Bouton qui déclenche la fonction handleClick */}
        <p>{name}</p> {/* On affiche notre variable name */}
        <ShowPokemon /> {/* On affiche le composant ShowPokemon sur la page */}
        <ListPokemons /> {/* On affiche le composant ListPokemons sur la page */}
        <Faq /> {/* On affiche le composant Faq sur la page */}
        <Message /> {/* On affiche le composant Message sur la page */}
      </main>
      <Footer /> {/* On affiche le composant Footer sur la page */}
    </>
  )
}

export default App
