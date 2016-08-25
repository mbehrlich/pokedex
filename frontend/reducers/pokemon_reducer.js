import { merge } from 'lodash';


const pokemonReducer = (state = [] , action) => {
  let newState;
  switch (action.type) {
    case "RECEIVE_ALL_POKEMON":
      newState = merge({}, state);
      newState = action.data;
      return newState;
    default:
      return state;
  }
};

export default pokemonReducer;
