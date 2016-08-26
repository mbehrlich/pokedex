import { Provider } from 'react-redux';
import React from 'react';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import { Router, Route, hashHistory } from 'react-router';
import {requestAllPokemon, requestPokemon} from '../actions/pokemon_actions';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';

const Root = ({ store }) => {

  const loadAllPokemon = (nextState, replace) => {
    store.dispatch(requestAllPokemon());
  };

  const loadPokemon = (nextState) => {
    store.dispatch(requestPokemon(nextState.params.id));
  };
//Next state has access to params id!

  return (
    <Provider store={store} >
      <Router history={hashHistory}>
        <Route path="/" component={PokemonIndexContainer} onEnter={loadAllPokemon}>
          <Route path="pokemon/:id" component={PokemonDetailContainer} onEnter={loadPokemon} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
