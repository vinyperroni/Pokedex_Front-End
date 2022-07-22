import { useContext, useState, useEffect } from "react";
import { HomeContainer } from "./styles";
import Card from "../../components/Card/Card";
import { BoxPageNumber } from "../../components/PageNumber/BoxPageNumber";
import { ModalNotify } from "../../components/Modal/ModalNotify"

import GlobalContext from "../../context/GlobalContext";

export default function HomePage() {
  const {list, triggerModal} = useContext(GlobalContext)
  
  return (
    <main>
      <HomeContainer>
        {triggerModal !== "" && <ModalNotify/>}

        {console.log("modal:"+triggerModal)}

        {list && list.map((pokemon) => {
          return <Card key={pokemon.name} url={pokemon.url}/>
        })}    

        <BoxPageNumber />
      </HomeContainer>
    </main>
  );
}
