export const POKEMON_CONSTANTS = {
  RECEIVE_ALL_POKEMON: "RECEIVE_ALL_POKEMON"
};

export const receiveAllPokemon = (data) => ({
  type: POKEMON_CONSTANTS.RECEIVE_ALL_POKEMON,
  data
});
