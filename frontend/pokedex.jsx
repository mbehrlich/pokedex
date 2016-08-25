import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';


document.addEventListener('DOMContentLoaded', () => {
  let root = document.getElementById('root');
  let store = configureStore();
  // window.store = store;
  // console.log(window.store.getState());
  // API.fetchAllPokemon((pokemon) => {
  //   store.dispatch(ACTIONS.receiveAllPokemon(pokemon));
  //   console.log(window.store.getState());
  // });
  ReactDOM.render(<Root store={store} />, root);
});
