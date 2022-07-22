import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import { Container } from "./styles"
import Logo from "../../img/logo.svg"
import { FaTrashAlt, FaAngleLeft } from "react-icons/fa";
import { MdCatchingPokemon } from "react-icons/md"
import { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
import { ModalNotify } from "../Modal/ModalNotify";

export default function Header() {
    const pathParams = useParams()
    const {pokedex, addToPokedex, delToPokedex, triggerModal, clearPokedex} = useContext(GlobalContext)

    const location = useLocation();
    const navigate = useNavigate();

    // const RenderButton = () => {
    //     if (location.pathname === "/") {
    //         return (
    //             <NavLink id="btn" to="/pokedex">
    //                 Pokédex
    //             </NavLink>
    //         )
    //     } else {
    //        if(location.pathname === '/pokedex'){
    //         return (
    //             <NavLink id="btn" to="/">
    //               <FaTrashAlt />
    //               <strong>Limpar</strong>
    //             </NavLink>
    //         )
    //        }
    //     }
    // }
  return (
    <>
    {triggerModal !== "" && <ModalNotify/>}
    <Container>
      

      <div>
        {location.pathname !== "/" &&
          <button  onClick={() => navigate(-1)}>
            <FaAngleLeft />
            <strong className="big-screen">Voltar</strong>
          </button>
        }
      </div>
      
      <img src={Logo} alt="Pokemon" />
      
      <div>
        {location.pathname === "/" &&
          <button  onClick={() => navigate("/pokedex")}>
            <MdCatchingPokemon />
            <strong className="big-screen">Pokedex</strong>
          </button>
        }        
        {location.pathname === "/pokedex" && (pokedex.length > 0 ? 
          <button  onClick={() => clearPokedex()}>
          <FaTrashAlt />
          <strong className="big-screen">Limpar</strong>
        </button>
        :
        null
        )
        }
        {location.pathname === `/pokemon/${pathParams.name}` &&
          (pokedex.some(pokemon => (pokemon.name === pathParams.name)) 
          ?
            <button onClick={() => delToPokedex(pathParams.name)}>
            <FaTrashAlt />
            <strong className="big-screen">Remover!</strong>
               </button>
          :            
            <button onClick={() => addToPokedex(pathParams.name)}>
              <strong className="big-screen">Capturar!</strong>              
            </button>)
        }
      </div>
    </Container>
    </>
  );
}
