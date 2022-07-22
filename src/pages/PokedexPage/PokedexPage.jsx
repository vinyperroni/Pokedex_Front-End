import { PokedexContainer } from "./styles";
import { useContext } from "react";
import Card from "../../components/Card/Card";
import GlobalContext from "../../context/GlobalContext";
import { ModalNotify } from "../../components/Modal/ModalNotify";
import Header from "../../components/Header/Header";
import pokedexImg from "../../img/pokedex.svg"


export default function PokedexPage() {
  const { pokedex, triggerModal } = useContext(GlobalContext)


  return (
    <>
      <Header/>
      <main>
        <PokedexContainer>
          {triggerModal !== "" && <ModalNotify />}

          {pokedex.length > 0 ? pokedex.map((pokemon) => {
            return <Card key={pokemon.name} name={pokemon.name} />
          }) :
          <div>
            <img src={pokedexImg} alt="" />
            <h1>Pokédex Vazia</h1>
          </div>
          
          }
        </PokedexContainer>
      </main>
    </>
  );
}
