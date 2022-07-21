import styled from "styled-components";
import Pokeball from "../../img/pokeball-icon.png";


export const Container = styled.div`
    text-transform: capitalize;
    /* max-width: 300px; */
    width: 100%;
    max-width: max(20vw, 320px);
    height: 100%;
    margin: 1.5em 0.5em;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
    border: none;
    border-radius: 0.5rem;

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
    display: flex;
    border-radius: 12px;
    padding: 0.5em 1em;


    @media(max-width: 468px) {
        padding: 13px 5px;
    }

`

export const BoxDetalhes = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;

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
        flex-direction: column;
        gap: 5px;
        max-width: 5em;

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

    button {
        color : #fff;
        text-decoration: underline;
        font-size: 16px;
        font-weight: 700;

        align-self: flex-start;

        margin-bottom: 10px;
        padding: 0;
        background-color: transparent;
        border: none;

        cursor: pointer;
    }


`

export const BoxImagem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    width: 100%;
    max-width: min(24vw, 10em);
    margin-left: 0.5em;
    position: relative;

    background: url(${Pokeball}) center center no-repeat;
    background-size: 99%;

    height: 190px;

    img {
        position: absolute;

        bottom: 65px;

        max-width: 12em;
        max-height: 10em;
    }

    button {
        width: 146px;
        height: 38px;
        border: none;
        border-radius: 8px;

        font-size: 16px;
        font-weight: 600;
        background-color: #f3eded;

        cursor: pointer;
    }

    button:hover {
        background-color: #dddddd;
    }

    @media(max-width: 468px) {
        button {
        width: 110px;
        }
    }
`

export const Type = styled.div`
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

