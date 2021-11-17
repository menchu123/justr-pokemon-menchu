import Link from "next/link";
import styles from "../../styles/PokemonPages.module.css";

const MyPokemonSSR = ({ pokemons }) => (
  <>
    <h1>My Pokemon SSR</h1>
    <ul>
      {pokemons.map((pokemon) => (
        <Link href={`/mypokemon-ssr/${pokemon.id}`} key={pokemon.name} passHref>
          <li className={styles.link}>{pokemon.name}</li>
        </Link>
      ))}
    </ul>
  </>
);

export async function getServerSideProps() {
  const res = await fetch(`https://pokeapi-menchu.herokuapp.com/pokemon`);
  const pokemons = await res.json();

  return {
    props: {
      pokemons,
    },
  };
}

export default MyPokemonSSR;
