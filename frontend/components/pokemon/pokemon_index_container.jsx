import { connect } from 'react-redux';
import { requestAllPokemon } from '../../actions/pokemon_actions';
import PokemonIndex from './pokemon_index';


const mapStateToProps = (state) => ({
  pokemon: state.pokemon
});

const mapDispatchToProps = (dispatch) => ({
  // receiveAllPokemon: (data) => dispatch(receiveAllPokemon(data));
  requestAllPokemon: () => dispatch(requestAllPokemon())
});


export default connect (
  mapStateToProps,
  mapDispatchToProps
)(PokemonIndex);
