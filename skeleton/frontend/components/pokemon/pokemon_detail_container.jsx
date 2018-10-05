import {connect} from 'react-redux';
import React from 'react';
import PokemonDetail from './pokemon_detail.jsx';
import {requestOnePokemon} from '../../actions/pokemon_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    pokemon: state.entities.pokemon[ownProps.match.params.pokemonId]
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    requestOnePokemon: (id) => dispatch(requestOnePokemon(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
