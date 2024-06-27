import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${page}`
        );
        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [page]);

  function handleNextButton() {
    setPage(page + 20);
  }

  function handlePreviousButton() {
    setPage(page - 20);
  }

  return (
    <main>
      <button
        type="button"
        onClick={handlePreviousButton}
        disabled={page === 0}
      >
        Previous Page
      </button>
      <button type="button" onClick={handleNextButton}>
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
