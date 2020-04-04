import { AnyAction } from 'redux';
import { type } from '../actions';

const pokemonsState: PokemonsState = {
  pokemons: [],
};

export const pokemonsReducer = (
  state = pokemonsState, action: AnyAction,
): PokemonsState => {
  switch (action.type) {
    case type.SET_POKEMONS:
      return {
        pokemons: [...state.pokemons, action.pokemon],
      };

    default:
      return state;
  }
};
