import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   this.props.requestAllPokemon();
  // }

  render() {
    let pokemon = this.props.pokemon.map( (p) => {
        return (
          <PokemonIndexItem pokemon={p} key={p.id}/>
        );
    });
    return (
      <section className="pokedex">
        <ul>
          { pokemon }
        </ul>
        {this.props.children}
      </section>
    );
  }
}


export default PokemonIndex;
