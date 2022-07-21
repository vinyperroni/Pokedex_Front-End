import { useContext } from "react";
import { HomeContainer } from "./styles";
import Card from "../../components/Card/Card";
import { BoxPageNumber } from "../../components/PageNumber/BoxPageNumber";

import GlobalContext from "../../context/GlobalContext";

export default function HomePage() {
  
  const {list} = useContext(GlobalContext)
 
  return (
    <main>
      <HomeContainer>

        {list && list.map((pokemon) => {
          return <Card key={pokemon.name} url={pokemon.url}/>
        })}    

        <BoxPageNumber />
      </HomeContainer>
    </main>
  );
}
