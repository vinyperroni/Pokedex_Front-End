import GlobalContext from "../context/GlobalContext";
import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function GlobalProvider(props) {
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
      if (window.localStorage.getItem("pageNumber") !== null) {
        setPageNumber(window.localStorage.getItem("pageNumber"));
        requestList();
      } else {
        requestList();
      }      
    },[])
  
    return(
        <GlobalContext.Provider value={{list, setList}}>
            {props.children}
        </GlobalContext.Provider>
    )
}
