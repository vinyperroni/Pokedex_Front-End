import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Container } from "./styles"
import Logo from "../../img/logo.svg"
import { FaTrashAlt, FaAngleLeft } from "react-icons/fa";
import { MdCatchingPokemon } from "react-icons/md"

export default function Header() {

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
        {location.pathname === "/pokedex" &&
          <button  onClick={() => navigate(-1)}>
            <FaAngleLeft />
            <strong className="big-screen">Limpar</strong>
          </button>
        }
        {location.pathname === "/pokemon/:name" &&
          <button  onClick={() => navigate(-1)}>
            <FaAngleLeft />
            <strong className="big-screen">Remover</strong>
          </button>
        }
      </div>
    </Container>
  );
}
