import React from 'react';

const PokemonDetail = ({currentPokemon}) => {
  let toys;
  if (currentPokemon.toys === undefined) {
    toys = [];
  } else {
    toys = currentPokemon.toys.map((toy) => {
      return (
        <li key={toy.id}>
          <img src={toy.image_url} />
        </li>
      );
    });
  }

  return (
    <div>
      <img src={currentPokemon.image_url} />
      <h3>{currentPokemon.name}</h3>
      <h5>{currentPokemon.poke_type}</h5>
      <ul>
        <li>attack: {currentPokemon.attack}</li>
        <li>defense: {currentPokemon.defense}</li>
        <li>{currentPokemon.moves}</li>
        <ul>
          {toys}
        </ul>


      </ul>

    </div>

  );
};

export default PokemonDetail;
