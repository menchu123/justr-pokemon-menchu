/* eslint-disable @next/next/no-img-element */

const PokemonPage = ({ pokemon }) =>
  pokemon ? (
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

export const getStaticPaths = async () => {
  const response = await fetch("https://pokeapi-menchu.herokuapp.com/pokemon");
  const pokemons = await response.json();
  const paths = pokemons.map((pokemon) => ({
    params: { id: `${pokemon.id}` },
  }));
  return { paths, fallback: true };
};

export const getStaticProps = async ({ params: { id } }) => {
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
    revalidate: 30,
  };
};

export default PokemonPage;
