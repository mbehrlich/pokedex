import { merge } from 'lodash';


const pokemonReducer = (state = {} , action) => {
  switch (action.type) {
    case "RECEIVE_ALL_POKEMON":
      return merge({}, state, action.data);
    default:
      return state;
  }
};

export default pokemonReducer;
