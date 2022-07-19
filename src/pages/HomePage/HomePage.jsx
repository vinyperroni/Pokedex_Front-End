import { HomeContainer } from "./styles";
import Card from "../../components/Card/Card";

export default function HomePage() {
  const pokemons = [
    {
      id: 1,
      name: "Pikachu",
      type: ["electric"],
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg",
    },

    {
      id: 2,
      name: "Charizard",
      type: ["fire", "flying"],
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg",
    },

    {
      id: 3,
      name: "Squirtle",
      type: ["water"],
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg",
    },
    {
      id: 4,
      name: "Bulbasaur",
      type: ["grass", "poison", "bug"],
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg",
    },
    {
      id: 5,
      name: "TESTE",
      type: ["fighting"],
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg",
    },
    {
      id: 6,
      name: "TESTE",
      type: ["dragon"],
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg",
    },
    {
      id: 7,
      name: "TESTE",
      type: ["ice"],
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg",
    },
    {
      id: 8,
      name: "TESTE",
      type: ["psychic"],
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/8.svg",
    },
    {
      id: 9,
      name: "TESTE",
      type: ["steel"],
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/9.svg",
    },
    {
      id: 10,
      name: "TESTE",
      type: ["ghost"],
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/10.svg",
    },
    {
      id: 11,
      name: "TESTE",
      type: ["dark"],
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/11.svg",
    },
    {
      id: 12,
      name: "TESTE",
      type: ["ground"],
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/12.svg",
    },
    {
      id: 13,
      name: "TESTE",
      type: ["rock"],
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/13.svg",
    },
    {
      id: 14,
      name: "TESTE",
      type: ["bug"],
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/14.svg",
    },
    {
      id: 15,
      name: "TESTE",
      type: ["normal"],
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/15.svg",
    },
    {
      id: 16,
      name: "TESTE",
      type: ["flying"],
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/16.svg",
    },
    {
      id: 17,
      name: "TESTE",
      type: ["fairy"],
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/17.svg",
    },
    {
      id: 18,
      name: "TESTE",
      type: ["poison"],
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/18.svg",
    },
  ];

  return (
    <main>
      <HomeContainer>
        {pokemons.map((pokemon) => {
          return (
            <Card
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              type={pokemon.type}
              image={pokemon.image}
            />
          );
        })}
      </HomeContainer>
    </main>
  );
}
