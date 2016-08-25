import React from 'react';


class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    let pokemon = this.props.pokemon.map( (p) => {
        return (
          <li className="pokemon-names" key={p.id}>{p.name}</li>
        );
    });
    return (
      <section className="pokedex">
        <ul>
          { pokemon }
        </ul>
      </section>
    );
  }
}


export default PokemonIndex;
