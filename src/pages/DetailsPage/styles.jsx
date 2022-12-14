import styled, { keyframes } from "styled-components";
import Pokeball from "../../img/pokeball-icon.png";

export const Container = styled.div`
    text-transform: capitalize;
    /* max-width: 300px; */
    /* max-width: max(20vw, 320px); */
    /* height: 100%; */
    padding: 7.5em 0.5em 2.5em 0.5em;
    min-height: 100vh;
    color: white;
    display: flex;
    flex-direction: column;
    & > h1 {
        font-size: 1.9em;
        margin: 0 auto;
        padding: 0.5em;
        max-width: 1280px;
        width: 92%;
        @media(max-width: 320px) {
            font-size: 1.5em;
            padding: 0.5em 0;
       }


    }

    
    #Loading {background-color: #3f3f3f;}
    #fire {background-color: #E64A19;}
    #fighting{background-color: #F57C00}

    #water {background-color: #00B0FF;}
    #dragon {background-color: #1976D2}
    #ice {background-color: #0097A7}

    #electric {background-color: #FFA000;}

    #normal {background-color: #616161;}
    #steel {background-color: #9E9E9E}
    #flying {background-color: #455A64}
    #dark {background-color: #78909C}

    #ground {background-color: #FFC107}
    #rock {background-color: #FFB74D}

    #grass {background-color: #C0CA33}
    #bug {background-color: #4CAF50}

    #poison {background-color: #AB47BC}
    #ghost {background-color: #CE93D8}

    #fairy {background-color: #af4d98}
    #psychic {background-color: #d24597}

`

export const BoxCard = styled.div`
    background: url(${Pokeball}) right center no-repeat;
    background-size: contain;

    position: relative;
    color: black;
    border-radius: 12px;
    padding: 1em;
    max-width: 1280px;
    width: 90%;
    height:calc(100vh - 256px);
    border: none;
    margin: 0 auto;
    display: grid;
    gap: 2vw;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-template-areas:    'box1 box3 name'
                            'box1 box3 box4'
                            'box2 box3 box4'
                            'box2 box3 box4';

    align-items: flex-end;

    @media(max-width: 768px) {
        height: fit-content;
        padding-bottom: 1.5em;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 0.5fr 1fr 3fr 1fr;
        grid-template:  "name ." 
                        "box1 box2" 
                        "box3 box3" 
                        "box4 box4" ;
        align-items: flex-start;
        
    }
    #box1{grid-area: box1; align-self: flex-start;}
    #box2{grid-area: box2;}
    #box3{grid-area: box3;}
    #box4{grid-area: box4;}
    & > img {
        position: absolute;
        top: -75px;
        right: 5px;

        max-width: 12em;
        max-height: 10em;
    }


`

export const SmallBox = styled.div`
    margin: 0 auto;
    background-color: white;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    display: flex;
    align-items: center;
    
    & > img{
        height: 100%;
        margin: 0 auto;
        @media(max-width: 520px) {
            height: 40vw;
       }

    }
    
        


`

export const MediumBox = styled.div`
    margin: 0 auto; 
    background-color: white;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
    box-sizing: border-box;
    padding: 5%;
    & > h2{
        margin: 0;
        padding: 0;
        width: 100%;
    }

`

export const BigBox = styled.div`
    margin: 0 auto; 
    background-color: white;
    border-radius: 12px;
    width: 100%;
    height:100%;
    padding: 5%;
    box-sizing: border-box;
    & > h2{
        margin: 0;
        margin-bottom: 20px;
        padding: 0;
    }

`

export const BoxDetalhes = styled.div`
    

    align-self: flex-start;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    top: 0;

    color: #fff;
    
    width: 50%;

    #detals p:first-child {
        margin: 10px 0 0;
    }

    #detals h2 {
        margin: 0 0 10px 0;
    }

    #type {
        display: flex;
        flex-direction: row;
        gap: 5px;
        max-width: 5em;

        p{
            padding: 0 5px;
        }

        #fire {background-color: #c74118;}
        #fighting{background-color: #da6d00}    
        #water {background-color: #0099e0;}
        #dragon {background-color: #1869ba}
        #ice {background-color: #008594}    
        #electric {background-color: #d88900;}    
        #normal {background-color: #4f4f4f;}
        #steel {background-color: #797777}
        #flying {background-color: #303f47}
        #dark {background-color: #617580}    
        #ground {background-color: #dda705}
        #rock {background-color: #d5993f}    
        #grass {background-color: #4e5314}
        #bug {background-color: #3b883d}    
        #poison {background-color: #833690}
        #ghost {background-color: #a878b1}    
        #fairy {background-color: #7a356a}
        #psychic {background-color: #9d3471}
    }
`

export const Type = styled.div`
    align-self: flex-start;
    justify-self: flex-start;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    height: 31px;
    padding: 0.15em 0.5em;

    border: none;
    border-radius: 8px;
    box-shadow: 0 0 0.25em rgba(0,0,0,0.5);

    img {
        width: 20px;
        height: 20px;
    }    
`
export const Move = styled.div`
    display: flex;
    width: fit-content;
    align-items: center;
    background-color: #ECECEC;
    height: 31px;
    padding: 0.15em 0.5em;
    border: none;
    border-radius: 8px;
    
`

export const BoxImagem = styled.div` 
    width: 1fr;
    height: 190px;
`
const animation = keyframes`
      0% { width: 0; }
  100% { width:  ${(props) => props.value * 0.8}%; }
`;

export const Stat = styled.div`
    display: grid;
    grid-template-columns: 0.4fr 0.2fr 1fr;
    gap: 8px;
    margin: 8px 0;
    width: 100%;
    & > span{
        font-weight: bold;
        font-size: 15px;        
    }
    #statName{
        color: #5E5E5E;
    }
    & > div {
        border-radius: 100px;
        width: ${props => props.width * 0.8}%;
        max-width: 100%;
        background-color: #ff5511;
        animation: ${animation} 1s normal forwards;
    }
`



