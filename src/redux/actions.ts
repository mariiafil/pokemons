import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { getData } from '../api/getData';
import { getImgUrl } from '../api/getImgUrl';

export const type = {
  SET_POKEMONS: 'SET_POKEMONS',
  SET_LOAD_NUMBER: 'SET_LOAD_NUMBER',
  SET_IS_LOADING: 'SET_IS_LOADING',
  SET_ID: 'SET_ID',
  SET_QUERY: 'SET_QUERY',
};

export const setQuery = (query: string) => ({
  type: type.SET_QUERY,
  query,
});

export const setIsLoading = (status: boolean) => ({
  type: type.SET_IS_LOADING,
  isLoading: status,
});

export const setId = (id: number) => ({
  type: type.SET_ID,
  id,
});

export const setLoad = () => ({
  type: type.SET_LOAD_NUMBER,
});

export const setPokemons = (pokemon: Pokemon) => ({
  type: type.SET_POKEMONS,
  pokemon,
});

export const loadPokemons = (number: number, pokemons: Pokemon[]) => {
  return (dispatch:
      ThunkDispatch<PokemonsState&LoadNumberState,
      unknown,
      Action
    >) => {
    dispatch(setIsLoading(true));

    getData(number)
      .then(data => {
        data.results.forEach((pokemon: { url: string }) => {
          fetch(pokemon.url)
            .then(pokData => pokData.json()
              .then(info => {
                if (pokemons.every(item => item.id !== info.id)) {
                  const newPokemon = {
                    id: info.id,
                    name: info.name,
                    image: getImgUrl(info.id),
                    types: info.types
                      .map((item: { type: {name: string} }) => item.type.name),
                    attack: info.stats[4].base_stat,
                    speed: info.stats[0].base_stat,
                    spDefense: info.stats[1].base_stat,
                    spAttack: info.stats[2].base_stat,
                    defense: info.stats[3].base_stat,
                    hp: info.stats[5].base_stat,
                    moves: info.moves.length,
                    weight: info.weight,
                  };

                  dispatch(setPokemons(newPokemon));
                }
              }));
        });
      }).finally(() => dispatch(setIsLoading(false)));
  };
};
