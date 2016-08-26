
export const fetchAllPokemon = (success, error) => {

  $.ajax ({
    url: 'api/pokemon',
    method: 'GET',
    success,
    error
  });
};

export const fetchPokemon = (id, success, error) => {
  $.ajax ({
    url: `api/pokemon/${id}`,
    method: 'GET',
    success,
    error
  });
};
