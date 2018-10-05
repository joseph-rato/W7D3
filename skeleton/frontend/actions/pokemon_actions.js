import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_ONE_POKEMON = 'RECEIVE_ONE_POKEMON';

export const receiveAllPokemon = pokemon => {
  return {
    type: RECEIVE_ALL_POKEMON,
    pokemon
  };
};

export const receiveOnePokemon = payload => {
  return {
    type: RECEIVE_ONE_POKEMON,
    pokemon: payload.pokemon,
    items: payload.items,
  };
};

export const requestAllPokemon = () => (dispatch) => {
  return (
    APIUtil.fetchAllPokemons().then( (res) => {
      dispatch(receiveAllPokemon(res));
    })
  );
};


export const requestOnePokemon = (id) => (dispatch) => {
  return (
    APIUtil.fetchOnePokemon(id).then(res => {
      dispatch(receiveOnePokemon(res));
    })
  );
};
