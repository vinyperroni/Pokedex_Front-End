import { BoxCard, Container, Stat, SmallBox, MediumBox, Move, BigBox, BoxImagem, BoxDetalhes, Type } from "./styles";
import { useParams } from "react-router-dom";
import axios from "axios"
import { useEffect, useState } from "react";
import { ImgType } from "../../utils/ImgType";

export default function DetailsPage() {

    const pathParams = useParams();

    const [name, setName] = useState("carregando");
    const [type, setType] = useState([""]);
    const [moves, setMoves] = useState([""]);
    const [stats, setStats] = useState([]);
    const [id, setId] = useState("00");
    const [image, setImage] = useState("");
    const [frontImg, setFrontImg] = useState("")
    const [backImg, setBackImg] = useState("")
   
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        getDetails()
    }, [pathParams.nome])



    const getDetails = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pathParams.name}`)
            .then((response) => {
                console.log(response.data);
                setName(response.data.name)
                setId(response.data.id)

                const types = response.data.types.map((item) => {
                    return item.type.name
                })

                const moves = response.data.moves.map((item) => {
                    return item.move.name
                })

                const stats = response.data.stats.map((item) => {
                    return {nome: item.stat.name,
                            stat: item.base_stat}
                })

                setStats(stats)
                setMoves(moves)
                setType(types)
                setLoading(false)
                setImage(response.data.sprites.other.dream_world.front_default  || response.data.sprites.other.home.front_default)
                setFrontImg(response.data.sprites.front_default)
                setBackImg(response.data.sprites.back_default)
            }).catch((error) => {
                console.log(error);
            })
    }

    return (
        <main>
        <Container>
            <h1>Detalhes</h1>
            <BoxCard className="cardColor" id={type[0]}>
                <SmallBox id="box1">
                    <img src={frontImg} alt="" />
                </SmallBox>
                <SmallBox id="box2">
                    <img src={backImg} alt="" />
                </SmallBox>
                <MediumBox id="box4">
                    <h2>Moves:</h2>
                    {moves && moves.slice(0, 8).map((move) => {
                  return (
                    <Move key={move}>
                      <p>{move}</p>
                    </Move>
                  );
                })}
                </MediumBox>
                <BigBox id="box3">
                    <h2>Base stats</h2>
                    {stats && stats.map((stat) => {
                        return (
                            
                            <Stat>
                                <span id="statName">{stat.nome}</span>
                                <span>{stat.stat}</span>
                                <div style={{width:`${stat.stat}%`}}></div>
                            </Stat>
                            
                        
                        )
                    })}
                </BigBox>              
               
                <BoxDetalhes>
                    <div id="detals">
                        <p>#{id}</p>
                        <h2>{name}</h2>

                        <div id="type">
                            {type.map((type) => {
                                return (
                                    <Type key={type} id={type}>
                                        {ImgType(type)}
                                        <p>{type}</p>
                                    </Type>
                                );
                            })}
                        </div>
                    </div>

                </BoxDetalhes>
                <img src={image} alt={name} />
            </BoxCard>
        </Container>
        </main>
    )
}
