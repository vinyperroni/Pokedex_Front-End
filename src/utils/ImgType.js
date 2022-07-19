import Bug from "../img/pokemonsType/Bug.png"
import Dark from "../img/pokemonsType/Dark.png"
import Dragon from "../img/pokemonsType/Dragon.png"
import Electric from "../img/pokemonsType/Electric.png"
import Fairy from "../img/pokemonsType/Fairy.png"
import Fighting from "../img/pokemonsType/Fighting.png"
import Fire from "../img/pokemonsType/Fire.png"
import Flying from "../img/pokemonsType/Flying.png"
import Ghost from "../img/pokemonsType/Ghost.png"
import Grass from "../img/pokemonsType/Grass.png"
import Ground from "../img/pokemonsType/Ground.png"
import Ice from "../img/pokemonsType/Ice.png"
import Normal from "../img/pokemonsType/Normal.png"
import Poison from "../img/pokemonsType/Poison.png"
import Psychic from "../img/pokemonsType/Psychic.png"
import Rock from "../img/pokemonsType/Rock.png"
import Steel from "../img/pokemonsType/Steel.png"
import Water from "../img/pokemonsType/Water.png"


export const ImgType = (type) => {
    switch (type) {
        case "bug":
            return <img src={Bug} alt="Bug" />
        case "dark":
            return <img src={Dark} alt="Dark" />
        case "dragon":
            return <img src={Dragon} alt="Dragon" />
        case "electric":
            return <img src={Electric} alt="Electric" />
        case "fairy":
            return <img src={Fairy} alt="Fairy" />
        case "fighting":
            return <img src={Fighting} alt="Fighting" />
        case "fire":
            return <img src={Fire} alt="Fire" />
        case "flying":
            return <img src={Flying} alt="Flying" />
        case "ghost":
            return <img src={Ghost} alt="Ghost" />
        case "grass":
            return <img src={Grass} alt="Grass" />
        case "ground":
            return <img src={Ground} alt="Ground" />
        case "ice":
            return <img src={Ice} alt="Ice" />
        case "normal":
            return <img src={Normal} alt="Normal" />
        case "poison":
            return <img src={Poison} alt="Poison" />
        case "psychic":
            return <img src={Psychic} alt="Psychic" />
        case "rock":
            return <img src={Rock} alt="Rock" />
        case "steel":
            return <img src={Steel} alt="Steel" />
        case "water":
            return <img src={Water} alt="Water" />
        default:
            return <img src={Bug} alt="Bug" />
}
}