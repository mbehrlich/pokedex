export const POKEMON_CONSTANTS = {
  RECEIVE_ALL_POKEMON: "RECEIVE_ALL_POKEMON",
  REQUEST_ALL_POKEMON: "REQUEST_ALL_POKEMON",
  REQUEST_POKEMON: "REQUEST_POKEMON",
  RECEIVE_POKEMON: "RECEIVE_POKEMON"
};

export const receiveAllPokemon = (data) => ({
  type: POKEMON_CONSTANTS.RECEIVE_ALL_POKEMON,
  data
});

export const requestAllPokemon = () => ({
  type: POKEMON_CONSTANTS.REQUEST_ALL_POKEMON
});

export const requestPokemon = (id) => ({
  type:POKEMON_CONSTANTS.REQUEST_POKEMON,
  id
});

export const receivePokemon = (id) => ({
  type:POKEMON_CONSTANTS.RECEIVE_POKEMON,
  id
});
