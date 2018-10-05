import {RECEIVE_ALL_POKEMON, RECEIVE_ONE_POKEMON} from '../actions/pokemon_actions';
import {merge} from 'lodash';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return action.pokemon; // use merge to not fully overwrite prev state
    case RECEIVE_ONE_POKEMON:
      let newState = merge({}, state, {[action.pokemon.id]: action.pokemon});
      return newState;
    default:
      return state;
  }
};

export default pokemonReducer;
