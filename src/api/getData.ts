export const getData = (quantity: number) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon?limit=${quantity}`)
    .then(response => response.json());
};
