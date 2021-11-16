import Link from "next/link";
import styles from "../../styles/PokemonPages.module.css";

const MyPokemonSSG = ({ pokemons }) => {
  return (
    <>
      <h1>My Pokemon SSG</h1>
      <ul>
        {pokemons.map((pokemon) => (
          <Link
            href={`/mypokemon-ssg/${pokemon.id}`}
            key={pokemon.name}
            passHref
          >
            <li className={styles.link}>{pokemon.name}</li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch(`https://pokeapi-menchu.herokuapp.com/pokemon`);
  const pokemons = await res.json();

  return {
    props: {
      pokemons,
    },
  };
}

export default MyPokemonSSG;
