import GlobalContext from "../context/GlobalContext";
import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function GlobalProvider(props) {
    
    const [list, setList] = useState([]);
  
    const requestList = () => {
      axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=50")
      .then((response) => {
        setList(response.data.results);
      }).catch((error) => {
        setList(error.data);
        console.log(error);
      }) 
    }
  
    useEffect(() => {
      requestList();
    },[])
  
    return(
        <GlobalContext.Provider value={{list, setList}}>
            {props.children}
        </GlobalContext.Provider>
    )
}
