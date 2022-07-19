import { useContext } from "react";
import { HomeContainer } from "./styles";
import Card from "../../components/Card/Card";

import GlobalContext from "../../context/GlobalContext";

export default function HomePage() {

  const pokemon = useContext(GlobalContext)
 
  return (
    <main>
      <HomeContainer>

        {pokemon && pokemon.list.map((pokemon) => {
          return <Card key={pokemon.id} url={pokemon.url}/>
        })}    
      
      </HomeContainer>
    </main>
  );
}
