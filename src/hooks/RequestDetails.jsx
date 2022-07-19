import { useState, useEffect } from "react";
import axios from "axios";


export function RequestDetails(url) {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await axios.get(url);
        setPokemon(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    loadPokemon();
  }, [url]);

  return pokemon
}