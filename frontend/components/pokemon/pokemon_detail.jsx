import React from 'react';

const PokemonDetail = ({currentPokemon}) => (
  <div>
    <img src={currentPokemon.image_url} />
    <h3>{currentPokemon.name}</h3>
    <h5>{currentPokemon.poke_type}</h5>
    <ul>
      <li>attack: {currentPokemon.attack}</li>
      <li>defense: {currentPokemon.defense}</li>
      <li>{currentPokemon.moves}</li>


    </ul>

  </div>

);

export default PokemonDetail;
