const PokemonPage = ({ pokemon }) => {
  return (
    <>
      <h1>{pokemon.name}</h1>
    </>
  );
};

export const getStaticPaths = async () => {
  const response = await fetch("https://pokeapi-menchu.herokuapp.com/pokemon");
  const pokemons = await response.json();
  const paths = pokemons.map((pokemon) => ({
    params: { id: "" + pokemon.id },
  }));
  return { paths, fallback: true };
};

export const getStaticProps = async ({ params: { id } }) => {
  const response = await fetch(
    `https://pokeapi-menchu.herokuapp.com/pokemon/${id}`
  );
  const pokemon = await response.json();
  return {
    props: {
      pokemon: pokemon,
    },
    revalidate: 30,
  };
};

export default PokemonPage;
