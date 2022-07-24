import GlobalContext from "../context/GlobalContext";
import React, { useState, useEffect, useCallback } from 'react';
import axios from "axios";

export default function GlobalProvider(props) {
    const [triggerModal, setTriggerModal] = useState("");
    const [pageNumber, setPageNumber] = useState(1);
    const [list, setList] = useState([]);
    const [pokedex, setPokedex] = useState([])


  const requestList = useCallback(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${(pageNumber - 1) * 20}&limit=20`)
    .then((response) => {
      setList(response.data.results);
    }).catch((error) => {
      setList(error.data);
      console.log(error);
    }) 
  }, [pageNumber, setList])

    const addToPokedex = (item) => {
      setPokedex([...pokedex, {name: item}])
      setTriggerModal("add")
      localStorage.setItem("pokedex", JSON.stringify([...pokedex, {name: item}]));
    }

    const delToPokedex = (item) => {
      setPokedex(pokedex.filter((pokemon) => pokemon.name !== item))
      localStorage.setItem("pokedex", JSON.stringify(pokedex.filter((pokemon) => pokemon.name !== item)));
      setTriggerModal("del")
    }

    const clearPokedex = () => {
      if (window.confirm("Quer mesmo esvaziar sua Pokedex?")) {
        setPokedex([])
        localStorage.removeItem("pokedex")  
      }
    }
  
    useEffect(() => {
      requestList();
      if (localStorage.getItem("pokedex")) {
          setPokedex(JSON.parse(localStorage.getItem("pokedex")))      
      } 
    },[pageNumber, requestList])
  
    return(
        <GlobalContext.Provider value={{list, setList, pageNumber, setPageNumber, triggerModal, setTriggerModal, pokedex, setPokedex, addToPokedex, delToPokedex, clearPokedex}}>
            {props.children}
        </GlobalContext.Provider>
    )
}
