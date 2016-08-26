import {fetchAllPokemon, fetchPokemon} from '../util/api_util';
import {requestAllPokemon, receiveAllPokemon, receivePokemon} from '../actions/pokemon_actions';

const PokemonMiddleware = ({dispatch}) => next => action => {
  let success;
  let error;
  switch (action.type) {
    case "REQUEST_ALL_POKEMON":
      success = (data) => {
        dispatch(receiveAllPokemon(data));
      };
      error = (data) => {
        console.log(data);
      };
      fetchAllPokemon(success, error);
      break;

    case 'REQUEST_POKEMON':
      success = (data) => {
        dispatch(receivePokemon(data));
      };
      error = (data) => {
        console.log(data);
      };
      fetchPokemon(action.id, success, error);
      break;
    default:
      next(action);
  }
};

export default PokemonMiddleware;
