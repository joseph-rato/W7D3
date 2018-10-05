

export const fetchAllPokemons = () => {
  return $.ajax({
      url: '/api/pokemons',
      method: 'GET'
  });
};

export const fetchOnePokemon = (id) => {
  return $.ajax({
    url: `/api/pokemons/${id}`,
    method: 'GET'
  });
};
