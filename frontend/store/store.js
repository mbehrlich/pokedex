import { createStore } from 'redux';
import pokemonReducer from '../reducers/pokemon_reducer';

const configureStore = () => createStore(pokemonReducer);


export default configureStore;
