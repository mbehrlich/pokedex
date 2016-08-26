import React from 'react';
import { withRouter } from 'react-router';



const PokemonIndexItem = ({pokemon, router}) => {

  const _handleClick = (routerName, url) => {
    routerName.push(url);
  };

  return (
    <li className="pokemon-names" onClick={ () => _handleClick(router, `/pokemon/${pokemon.id}`)}>
      <section>
        <h3>{pokemon.name}</h3>
        <img src= {pokemon.image_url} />
      </section>
    </li>
  );

};

export default withRouter(PokemonIndexItem);
