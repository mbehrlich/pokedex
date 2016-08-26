import { merge } from 'lodash';

const currentPokemonReducer = (state = {} , action) => {
  let newState;
  switch (action.type) {
    case "RECEIVE_POKEMON":
      newState = action.id;
      return newState;
    default:
      return state;
  }
};

export default currentPokemonReducer;
