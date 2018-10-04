import React from 'react';
import ReactDOM from 'react-dom';
import {receiveAllPokemon} from './actions/pokemon_actions';
import {fetchAllPokemons} from './util/api_util';
import configureStore from './store/store';


document.addEventListener("DOMContentLoaded",()=> {
  const root = document.getElementById("root");
  const store = configureStore();
  window.receiveAllPokemon = receiveAllPokemon;
  window.fetchAllPokemons = fetchAllPokemons;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<h1>NO WAY JOSE</h1>,root);
});
