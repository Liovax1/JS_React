import React from 'react';

const ShowPokemon = () => {

    const pokemon = {
    name: "Pikachu",
    type: "Electric",
    color: "Yellow",
    hp: 100,
    attack: 50,
    defense: 40,
    evolution: {
        name: "Raichu",
        type: "Electric",
        color: "Yellow",
        hp: 120,
        attack: 70,
        defense: 60,
    },
};

//On créer un composant ShowPokemon qui affiche les informations du pokemon. L'objet pokemon est devenu un composant react.
  return (
    <div>
      <h2>{pokemon.name}</h2>
      <p>Type : {pokemon.type}</p>
      <p>Couleur : {pokemon.color}</p>
      <p>HP: {pokemon.hp}</p>
      <p>Attaque : {pokemon.attack}</p>
      <p>Defense : {pokemon.defense}</p>
      <h3>Evolution</h3>
      <p>Nom : {pokemon.evolution.name}</p>
      <p>Type : {pokemon.evolution.type}</p>
      <p>Couleur : {pokemon.evolution.color}</p>
      <p>HP : {pokemon.evolution.hp}</p>
      <p>Attaque : {pokemon.evolution.attack}</p>
      <p>Defense : {pokemon.evolution.defense}</p>
    </div>
  );
};

export default ShowPokemon;