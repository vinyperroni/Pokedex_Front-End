import { useContext } from "react";
import { HomeContainer } from "./styles";
import Card from "../../components/Card/Card";
import { BoxPageNumber } from "../../components/PageNumber/BoxPageNumber";
import { ModalNotify } from "../../components/Modal/ModalNotify"
import Header from "../../components/Header/Header";

import GlobalContext from "../../context/GlobalContext";

export default function HomePage() {
  const {list, triggerModal} = useContext(GlobalContext)
  
  return (
    <>
      <Header/>
      <main>
        <HomeContainer>
          {triggerModal !== "" && <ModalNotify/>}

          {console.log("modal:"+triggerModal)}

          {list && list.map((pokemon) => {
            return <Card key={pokemon.name} name={pokemon.name}/>
          })}    

          <BoxPageNumber />
        </HomeContainer>
      </main>
    </>
  );
}
