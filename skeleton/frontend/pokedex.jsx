import React from 'react';
import ReactDOM from 'react-dom';
import {receiveAllPokemon} from './actions/pokemon_actions';
import {fetchAllPokemons} from './util/api_util';


document.addEventListener("DOMContentLoaded",()=> {
  const root = document.getElementById("root");
  window.receiveAllPokemon = receiveAllPokemon;
  window.fetchAllPokemons = fetchAllPokemons;
  ReactDOM.render(<h1>NO WAY JOSE</h1>,root);
});
