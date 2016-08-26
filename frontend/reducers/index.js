import { combineReducers } from 'redux';
import pokemonReducer from './pokemon_reducer';
import currentPokemonReducer from './current_pokemon_reducer';

export default combineReducers({
  pokemon: pokemonReducer,
  currentPokemon: currentPokemonReducer
  //add current pokemon
});
