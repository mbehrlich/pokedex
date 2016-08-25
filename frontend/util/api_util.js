
export const fetchAllPokemon = (success, error) => {

  $.ajax ({
    url: 'api/pokemon',
    method: 'GET',
    success,
    error
  });
};
