import { connect } from 'react-redux';
import Toy from './toy';


const mapStateToProps = (state, props) => ({
  // pokemon: state.pokemon,
  currentPokemon: state.currentPokemon
});

const mapDispatchToProps = (dispatch) => ({
  // receiveAllPokemon: (data) => dispatch(receiveAllPokemon(data)),
  // requestAllPokemon: () => dispatch(requestAllPokemon()),
  requestPokemon: (id) => dispatch(requestPokemon(id))
});


export default connect (
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
