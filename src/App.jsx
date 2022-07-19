import { Router } from "./router/Router";
import { GlobalContainer } from "./styles";
import GlobalContext from "./context/GlobalContext";
import { useState, useEffect } from 'react';
import axios from "axios";



export default function App() {

  const [list, setList] = useState([]);
  const [listDetails, setListDetails] = useState({});

  const requestList = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=12")
    .then((response) => {
      
      setList(response.data.results.map(item => {        
          return {...item, add: false, types: listDetails.name}
      }));
    }).catch((error) => {
      setList(error.data);
      console.log(error);
    }) 
  }

  async function pokemonDetails(url){
    try {
        const response = await axios
        .get(url)
        console.log(response.data)
        
    } catch (error) {
        alert(error.message)
    }
    console.log(listDetails);
  }

  const resquestDetail = (url) => {
    axios.get(url)
    .then((response) => {
      setListDetails(response.data)
    }).catch((error) => {
      console.log(error);
    })
  }

  useEffect(() => {
    requestList();
  },[])

  return (
    <div>
      <GlobalContext.Provider value={{list, setList, resquestDetail}}>
        <GlobalContainer />
        <Router />
      </GlobalContext.Provider>
    </div>
  );
}
