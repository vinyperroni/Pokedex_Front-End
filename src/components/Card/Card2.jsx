import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, BoxCard, BoxDetalhes, BoxImagem, Type } from "./styles";
import { ImgType } from "../../utils/ImgType";
import axios from "axios"

export default function Card2(props) {
  
  const [name, setName] = useState()
  const [type, setType] = useState()
  const [id, setId] = useState()
  const [image, setImage] = useState()

  useEffect (() => {
    resquestDetail(props.url)
    
  }, [])

  const resquestDetail = (url) => {
    axios.get(url)
    .then((response) => {
      setName(response.data.name)
      setId(response.data.id)
      setType(response.data.types[0].type.name)
      setImage(response.data.sprites.other.dream_world.front_default)
    }).catch((error) => {
      console.log(error);
    })
  }


  return (
    <>
      <Container className="card" key={id}>
        <BoxCard className="cardColor" id={type}>
          <BoxDetalhes>
            <div id="detals">
              <p>#{id}</p>
              <h2>{name}</h2>

              <div id="type">
                    <Type key={type}>
                      <div id={type}>
                        {ImgType(type)}
                        <p>{type}</p>
                      </div>
                    </Type>
              </div>
            </div>

            <NavLink to={`/pokemon/${name}`}><button>Detalhes</button></NavLink>
          </BoxDetalhes>

          <BoxImagem>
            <img src={image} alt={name} />
            <button>Capturar!</button>
          </BoxImagem>
        </BoxCard>
      </Container>
    </>
  );
}
