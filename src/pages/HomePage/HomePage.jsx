import { useContext, useEffect } from "react";
import { HomeContainer } from "./styles";
import Card from "../../components/Card/Card";
import { BoxPageNumber } from "../../components/PageNumber/BoxPageNumber";
import { ModalNotify } from "../../components/Modal/ModalNotify"
import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";

import GlobalContext from "../../context/GlobalContext";

export default function HomePage() {
  const {list, triggerModal, setPageNumber} = useContext(GlobalContext);
  const pageNumber  = useParams().pageNumber

  useEffect(() => {
      setPageNumber(parseInt(pageNumber) < 58  && parseInt(pageNumber) > 0 ? parseInt(pageNumber) : 1);
  }, [pageNumber, setPageNumber]);

  return (
    <>
      <Header/>
      <main>
        <HomeContainer>
          {triggerModal !== "" && <ModalNotify/>}

          {list && list.map((pokemon) => {
            return <Card key={pokemon.name} name={pokemon.name}/>
          })}    

          <BoxPageNumber />
        </HomeContainer>
      </main>
    </>
  );
}
