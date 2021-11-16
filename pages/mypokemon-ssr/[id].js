/* eslint-disable @next/next/no-img-element */

const PokemonPage = ({ pokemon }) => {
  return pokemon ? (
    <>
      <h1>{pokemon.name}</h1>
      <img
        src={pokemon.sprites.other.dream_world.front_default}
        alt={pokemon.name}
        height={500}
      />
    </>
  ) : (
    ""
  );
};

export const getServerSideProps = async ({ params: { id } }) => {
  const response = await fetch(
    `https://pokeapi-menchu.herokuapp.com/pokemon/${id}`
  );
  const pokemon = await response.json();

  const pokeapiResponse = await fetch(pokemon.url);
  const pokeapiPokemon = await pokeapiResponse.json();
  return {
    props: {
      pokemon: pokeapiPokemon,
    },
  };
};

export default PokemonPage;
