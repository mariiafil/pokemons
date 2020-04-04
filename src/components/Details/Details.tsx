import React, { FC } from 'react';
import { connect } from 'react-redux';
import './details.scss';
import { createId } from '../../api/createId';

interface Props {
  pokemons: Pokemon[];
  id: number|null;
}
export const DetailsTemplate: FC<Props> = ({ pokemons, id }) => {
  const pokemon = pokemons.find(item => item.id === id);

  return (
    <div className="details">
      {pokemon ? (
        <div className="details__card">
          <img
            className="details__img"
            src={pokemon.image}
            alt={pokemon.name}
          />
          <h3 className="details__title">
            {createId(pokemon.id)}
            {' '}
            {pokemon.name}
          </h3>
          <ul className="details__list">
            <li className="details__item">
              <p className="details__option">Title</p>
              <ul className="details__option-list">
                {pokemon.types.map(item => (
                  <li className="details__option-item" key={id + item}>
                    {item}
                  </li>
                ))}
              </ul>
            </li>
            <li className="details__item">
              <p className="details__option">Attack</p>
              <p className="details__option-list">
                {pokemon.attack}
              </p>
            </li>
            <li className="details__item">
              <p className="details__option">Defense</p>
              <p className="details__option-list">
                {pokemon.defense}
              </p>
            </li>
            <li className="details__item">
              <p className="details__option">HP</p>
              <p className="details__option-list">
                {pokemon.hp}
              </p>
            </li>
            <li className="details__item">
              <p className="details__option">SP Attack</p>
              <p className="details__option-list">
                {pokemon.spAttack}
              </p>
            </li>
            <li className="details__item">
              <p className="details__option">SP Defense</p>
              <p className="details__option-list">
                {pokemon.spDefense}
              </p>
            </li>
            <li className="details__item">
              <p className="details__option">Speed</p>
              <p className="details__option-list">
                {pokemon.speed}
              </p>
            </li>
            <li className="details__item">
              <p className="details__option">Weight</p>
              <p className="details__option-list">
                {pokemon.weight}
              </p>
            </li>
            <li className="details__item">
              <p className="details__option">Total moves</p>
              <p className="details__option-list">
                {pokemon.moves}
              </p>
            </li>
          </ul>
        </div>
      ) : (
        <p className="details__choose">Please, choose Pokemon</p>
      )}
    </div>
  );
};

const mapStateToProps = (
  state: {
    pokemonsReducer: PokemonsState;
    idReducer: IdState;
  },
) => ({
  pokemons: state.pokemonsReducer.pokemons,
  id: state.idReducer.id,
});

export const Details = connect(
  mapStateToProps,
)(DetailsTemplate);
