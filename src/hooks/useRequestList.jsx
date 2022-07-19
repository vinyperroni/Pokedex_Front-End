import { useState, useEffect } from "react";
import axios from "axios";


export function useRequestList(page) {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadPokemon() {
      setLoading(true);
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${page}&limit=20`);
        setPokemon(response.data.results);
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    }
    loadPokemon();
  }, [page]);

  return { pokemon, loading, error };
}