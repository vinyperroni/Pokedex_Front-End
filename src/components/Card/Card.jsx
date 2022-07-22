import { NavLink } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { Container, BoxCard, BoxDetalhes, BoxImagem, Type } from "./styles";
import { ImgType } from "../../utils/ImgType";
import PokemonLoading from "../../img/pokemon.png";

import GlobalContext from "../../context/GlobalContext";

import axios from "axios";

export default function Card(props) {
  const {addToPokedex, pokedex, delToPokedex} = useContext(GlobalContext)
  
  const [name, setName] = useState("carregando");
  const [type, setType] = useState([""]);
  const [id, setId] = useState("00");
  const [image, setImage] = useState(PokemonLoading);
  const [loading, setLoading] = useState(true);

  useEffect (() => {
    resquestDetail(props.name)
    
  }, [])

  const resquestDetail = (name) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => {
      setName(response.data.name)
      setId(response.data.id)

      const types = response.data.types.map((item) => {
        return item.type.name
      })

      setType(types)
      setImage(response.data.sprites.other.dream_world.front_default || response.data.sprites.other.home.front_default)
      setLoading(false)
    }).catch((error) => {
      console.log(error);
    })
  }

  return (
    <>
       <Container className="card" key={id}>
       <BoxCard className="cardColor" id={type[0]}>
         <BoxDetalhes>
           <div id="detals">
             <p>#{id}</p>
             <h2>{name.split("-").join(" ")}</h2>

             <div id="type">
             {type.slice(0, 2).map((type) => {
                  return (
                    <Type key={type} id={type}>
                      {ImgType(type)}
                      <p>{type}</p>
                    </Type>
                  );
                })}
             </div>
           </div>

           <NavLink to={`/pokemon/${name}`}><button>Detalhes</button></NavLink>
         </BoxDetalhes>

         <BoxImagem>
           <img src={image} alt={name} />
           {loading ? <button style={{cursor: "wait"}}>Carregando</button> 
           :
           (pokedex.some(pokemon => (pokemon.name === name)) 
            ?
              <button style={{background: "red", color: "white"}} onClick={() => delToPokedex(name)}> Remover! </button>
            :            
              <button onClick={() => addToPokedex(name)}>
                Capturar!
              </button>)
            }
         </BoxImagem>
       </BoxCard>
     </Container>
    </>
  );
}
