import Link from "next/link";
import styles from "../../styles/PokemonPages.module.css";

const MyPokemonISR = ({ pokemons }) => (
  <>
    <h1>My Pokemon ISR</h1>
    <ul>
      {pokemons.map((pokemon) => (
        <Link href={`/mypokemon-isr/${pokemon.id}`} key={pokemon.name} passHref>
          <li className={styles.link}>{pokemon.name}</li>
        </Link>
      ))}
    </ul>
  </>
);

export async function getStaticProps() {
  const res = await fetch(`https://pokeapi-menchu.herokuapp.com/pokemon`);
  const pokemons = await res.json();

  return {
    props: {
      pokemons,
    },
    revalidate: 20,
  };
}

export default MyPokemonISR;
