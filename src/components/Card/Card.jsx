import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, BoxCard, BoxDetalhes, BoxImagem, Type } from "./styles";
import { ImgType } from "../../utils/ImgType";
import PokemonLoading from "../../img/pokemon.png";

import axios from "axios";

export default function Card(props) {
  
  const [name, setName] = useState("carregando");
  const [type, setType] = useState([""]);
  const [id, setId] = useState("00");
  const [image, setImage] = useState(PokemonLoading);
  const [loading, setLoading] = useState(true);

  useEffect (() => {
    resquestDetail(props.url)
    
  }, [])

  const resquestDetail = (url) => {
    // axios.get(url)
    // .then((response) => {
    //   setName(response.data.name)
    //   setId(response.data.id)

    //   const types = response.data.types.map((item) => {
    //     return item.type.name
    //   })

    //   setType(types)
    //   setImage(response.data.sprites.other.dream_world.front_default)
    //   setLoading(false)
    // }).catch((error) => {
    //   console.log(error);
    // })
  }


  return (
    <>
       <Container className="card" key={id}>
       <BoxCard className="cardColor" id={type[0]}>
         <BoxDetalhes>
           <div id="detals">
             <p>#{id}</p>
             <h2>{name}</h2>

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
           : <button>Capturar!</button>}
           
         </BoxImagem>
       </BoxCard>
     </Container>
     
    </>
  );
}
