import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Container } from "./styles"
import Logo from "../../img/logo.svg"

export default function Header() {

    const location = useLocation();
    const navigate = useNavigate();

    const RenderButton = () => {
        if (location.pathname === "/") {
            return (
                <NavLink id="btn" to="/pokedex" className="button">
                    Pokédex
                </NavLink>
            )
        } else {
           if(location.pathname === '/pokedex'){
            return (
                <NavLink id="btn" to="/" className="button">
                    Home
                </NavLink>
            )
           }
        }
    }




  return (
    <header>
      <Container>
        <NavLink to="/" id="logo">
            <img src={Logo} alt="Pokemon" />
        </NavLink>
        <RenderButton/>
      </Container>
    </header>
  );
}
