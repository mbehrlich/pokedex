import { connect } from 'react-redux';
import { requestPokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';


const mapStateToProps = (state) => ({
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
