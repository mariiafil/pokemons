import React, { FC, useEffect, useMemo, ChangeEvent } from 'react';
import { connect } from 'react-redux';
import './list.scss';
import { Spinner } from '../Spinner/Spinner';
import * as actions from '../../redux/actions';

interface Props {
  pokemons: Pokemon[];
  load: number;
  isLoading: boolean;
  query: string;
  loadPokemons: (number: number, pokemons: Pokemon[]) => void;
  setLoad: () => void;
  setId: (id: number) => void;
  setQuery: (query: string) => void;
}

export const ListTemplate: FC<Props> = ({
  pokemons,
  load,
  isLoading,
  query,
  loadPokemons,
  setLoad,
  setId,
  setQuery,
}) => {
  useEffect(() => {
    loadPokemons(load, pokemons);
  }, [load]);

  const handleLoad = () => {
    setLoad();
  };

  const handleInfo = (id: number) => {
    setId(id);
  };

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setQuery(e.target.value);
  };

  const visibleCards = useMemo(() => {
    if (query === 'all') {
      return pokemons.sort((a, b) => a.id - b.id);
    }

    return pokemons.filter(item => item.types.includes(query));
  }, [query, pokemons]);

  return (
    <main className="main">
      {isLoading ? <Spinner /> : (
        <>
          <select
            name="type"
            className="main__select"
            onChange={(e) => handleSelect(e)}
            defaultValue={query}
          >
            <option value="all">All</option>
            <option value="poison">Poison</option>
            <option value="grass">Grass</option>
            <option value="fire">Fire</option>
            <option value="water">Water</option>
            <option value="ground">Ground</option>
            <option value="bug">Bug</option>
            <option value="normal">Normal</option>
          </select>
          <ul className="main__list">
            {visibleCards.map(pokemon => (
              <li key={pokemon.id} className="main__item">
                <button
                  type="button"
                  className="main__item-button"
                  onClick={() => handleInfo(pokemon.id)}
                >
                  <img
                    src={pokemon.image}
                    alt="pokemon"
                    className="main__img"
                  />
                  <h3 className="main__header">{pokemon.name}</h3>
                  <ul className="main__types">
                    {pokemon.types.map(type => (
                      <li key={type} className={`main__type ${type}`}>
                        {type}
                      </li>
                    ))}
                  </ul>
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
      <button
        type="button"
        onClick={handleLoad}
        className="main__button"
      >
        Load more
      </button>
    </main>
  );
};

const mapStateToProps = (
  state: {
    pokemonsReducer: PokemonsState;
    loaderReducer: LoadingState;
    loadNumberReducer: LoadNumberState;
    queryReducer: QueryState;
  },
) => ({
  pokemons: state.pokemonsReducer.pokemons,
  load: state.loadNumberReducer.loadNumber,
  isLoading: state.loaderReducer.isLoading,
  query: state.queryReducer.query,
});

const mapDispatchToProps = {
  loadPokemons: actions.loadPokemons,
  setLoad: actions.setLoad,
  setId: actions.setId,
  setQuery: actions.setQuery,
};

export const List = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListTemplate);
