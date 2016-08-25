import {fetchAllPokemon} from '../util/api_util';
import {requestAllPokemon, receiveAllPokemon} from '../actions/pokemon_actions';

const PokemonMiddleware = ({dispatch}) => next => action => {
  switch (action.type) {
    case "REQUEST_ALL_POKEMON":
      const success = (data) => {
        dispatch(receiveAllPokemon(data));
      };
      const error = (data) => {
        console.log(data);
      };
      fetchAllPokemon(success, error);
      break;
    default:
      next(action);
  }
};

export default PokemonMiddleware;
