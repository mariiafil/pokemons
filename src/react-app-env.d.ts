/// <reference types="react-scripts" />

interface Pokemon {
  id: number;
  image: string;
  name: string;
  types: string[];
  attack: number;
  defense: number;
  speed: number;
  spDefense: number;
  spAttack: number;
  hp: number;
  weight: number;
  moves: number;
}

interface PokemonsState {
  pokemons: Pokemon[];
}

interface QueryState {
  query: string;
}

interface LoadingState {
  isLoading: boolean;
}

interface LoadNumberState {
  loadNumber: number;
}

interface IdState {
  id: number|null;
}
