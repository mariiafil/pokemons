import { combineReducers } from 'redux';
import { loadNumberReducer } from './loadNumberReducer';
import { loaderReducer } from './loaderReducer';
import { pokemonsReducer } from './pokemonsReducer';
import { idReducer } from './idReducer';
import { queryReducer } from './queryReducer';

export const rootReducer = combineReducers({
  loaderReducer,
  loadNumberReducer,
  pokemonsReducer,
  idReducer,
  queryReducer,
});
