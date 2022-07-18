import { Container } from "./styles";
import { useState } from "react";

export default function Card(props) {

    const pokemons = [
        {   
            id: 1,
            name: 'Pikachu',
            type: ['electric'],
            Image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
        },

        {   
            id: 2,
            name: 'Charizard',
            type: ['fire', "flying"],
            Image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
        },

        {   
            id: 3,
            name: 'Squirtle',
            type: ['water'],
            Image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
        },
        {
            id: 4,
            name: 'Bulbasaur',
            type: ['grass', 'poison'],
            Image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
        },
        {
            id: 5,
            name: 'TESTE',
            type: ['fighting'],
            Image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
        },
        {
            id: 6,
            name: 'TESTE',
            type: ['dragon'],
            Image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
        }, 
        {
            id: 7,
            name: 'TESTE',
            type: ['ice'],
            Image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
        },
        {
            id: 8,
            name: 'TESTE',
            type: ['psychic'],
            Image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png',
        }, 
        {
            id: 9,
            name: 'TESTE',
            type: ['steel'],
            Image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
        },
        {
            id: 10,
            name: 'TESTE',
            type: ['ghost'],
            Image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png',
        },
        {
            id: 11,
            name: 'TESTE',
            type: ['dark'],
            Image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png',
        },
        {
            id: 12,
            name: 'TESTE',
            type: ['ground'],
            Image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png',
        },
        {
            id: 13,
            name: 'TESTE',
            type: ['rock'],
            Image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png',
        },
        {
            id: 14,
            name: 'TESTE',
            type: ['bug'],
            Image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png',
        },
        {
            id: 15,
            name: 'TESTE',
            type: ['normal'],
            Image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png',
        },
        {
            id: 16,
            name: 'TESTE',
            type: ['flying'],
            Image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png',
        },
        {
            id: 17,
            name: 'TESTE',
            type: ['fairy'],
            Image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png',
        },
        {
            id: 18,
            name: 'TESTE',
            type: ['poison'],
            Image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png',
        }


    ]

    const RenderCard = pokemons.map(pokemon => {
        return (
            <Container className="card" key={pokemon.id}>
                <div id={pokemon.type[0]}>
                <div className="card-image">
                    <img src={pokemon.Image} alt={pokemon.name} />
                </div>
                <div className="card-content">
                    <h3>{pokemon.name}</h3>
                    <p>{pokemon.type}</p>
                </div>
                </div>
            </Container>
        )
    })


    return (
        <div className="card">
            {RenderCard}
        </div>


    );
}