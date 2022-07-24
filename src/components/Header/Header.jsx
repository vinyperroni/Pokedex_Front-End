import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Container } from "./styles"
import Logo from "../../img/logo.svg"
import { FaTrashAlt, FaAngleLeft, FaPlusSquare } from "react-icons/fa";
import { MdCatchingPokemon } from "react-icons/md"
import { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
import { ModalNotify } from "../Modal/ModalNotify";

export default function Header() {
    const pathParams = useParams()
    const {pokedex, addToPokedex, delToPokedex, triggerModal, clearPokedex} = useContext(GlobalContext)

    const location = useLocation();
    const navigate = useNavigate();
  return (
    <>
    {triggerModal !== "" && <ModalNotify/>}
    <Container>
      <div>
        {!(location.pathname === `/page=${pathParams.pageNumber}` || location.pathname === "/") &&
          <button  onClick={() => navigate(-1)}>
            <FaAngleLeft />
            <strong className="big-screen">Voltar</strong>
          </button>
        }
      </div>
      
      <img src={Logo} alt="Pokemon"  onClick={() => navigate("/page=1")}/>
      
      <div>
        {(location.pathname === "/" || location.pathname === `/page=${pathParams.pageNumber}`) &&
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
            <FaTrashAlt className="icon"/>
            <strong className="big-screen">Remover!</strong>
               </button>
          :            
            <button onClick={() => addToPokedex(pathParams.name)}>
              <FaPlusSquare className="icon"/>
              <strong className="big-screen">Capturar!</strong>              
            </button>)
        }
      </div>
    </Container>
    </>
  );
}
