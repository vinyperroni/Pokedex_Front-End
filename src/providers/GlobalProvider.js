import GlobalContext from "../context/GlobalContext";
import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function GlobalProvider(props) {
    const [triggerModal, setTriggerModal] = useState("");
    const [pageNumber, setPageNumber] = useState(1);
    const [list, setList] = useState([]);
  
    const requestList = () => {
      axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${(pageNumber - 1) * 20}&limit=20`)
      .then((response) => {
        setList(response.data.results);
      }).catch((error) => {
        setList(error.data);
        console.log(error);
      }) 
    }
  
    useEffect(() => {
      requestList();
      
    },[pageNumber])
  
    return(
        <GlobalContext.Provider value={{list, setList, pageNumber, setPageNumber, triggerModal, setTriggerModal}}>
            {props.children}
        </GlobalContext.Provider>
    )
}
