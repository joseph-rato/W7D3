
import React from 'react';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
    // debugger;
  }

componentDidMount(){
  this.props.requestOnePokemon(this.props.match.params.pokemonId);
}

  render(){
    const pokemon = this.props.pokemon;
    // debugger;
    return (
      <div>
        <img src={`${pokemon.image_url}`}></img>
        <ul>
          <li>{pokemon.name}</li>
          <li>Type: {pokemon.poke_type}</li>
          <li>Attack: {pokemon.attack}</li>
          <li>Defense: {pokemon.defense}</li>
        </ul>
      </div>
    );
  }
}

export default PokemonDetail;
