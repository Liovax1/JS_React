import React from 'react';

const ListPokemons = () => {
    const pokemons = [
        {
          id: 1,
          name: "Bulbasaur",
          type: "Grass",
        },
        {
          id: 2,
          name: "Ivysaur",
          type: "Grass",
        },
        {
          id: 3,
          name: "Venusaur",
          type: "Grass",
        },
      ];

    return (
        <main>
            {pokemons.map(pokemon => ( //On utilise la méthode map pour parcourir le tableau pokemons
                <div key={pokemon.id}> {/*On utilise la clé id pour chaque élément du tableau*/}
                    <h2>{pokemon.name}</h2>
                    <p>Type : {pokemon.type}</p>
                </div>
            ))}
        </main>
    )
}

export default ListPokemons;