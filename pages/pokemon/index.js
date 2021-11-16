import Head from "next/head";
import { useEffect, useState } from "react";

const Pokemon = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
      );
      const pokemonData = await response.json();
      const pokemons = pokemonData.results;
      setPokemons(pokemons);
    })();
  }, [setPokemons]);

  return (
    <>
      <h1>Pokemon CSR</h1>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Pokemon;
