import styled from "styled-components";
import Pokeball from "../../img/pokeball-icon.png";


export const Container = styled.div`

    font-family: "Roboto", sans-serif;
    /* max-width: 300px; */
    width: 30%;
    min-width: 300px;
    height: 190px;
    margin: 55px 0 45px 0;




#fire {background-color: #fd7d24;}
#fighting{background-color: #d56723}

#water {background-color: #1982C4;}
#dragon {background-color: #53a4cf}
#ice {background-color: #51c4e7}

#electric {background-color: #eed535;}

#normal {background-color: #a4acaf;}
#steel {background-color: #9eb7b8}
#flying {background-color: #9eb7b8}
#dark {background-color: #707070}

#ground {background-color: #f7de3f}
#rock {background-color: #a38c21}

#grass {background-color: #9bcc50}
#bug {background-color: #729f3f}

#poison {background-color: #b97fc9}
#ghost {background-color: #7b62a3}

#fairy {background-color: #fdb9e8}
#psychic {background-color: #f366b9}

`

export const BoxCard = styled.div`
    display: flex;
    border-radius: 12px;
    padding: 13px 23px;


    @media(max-width: 468px) {
        padding: 13px 5px;
    }

`

export const BoxDetalhes = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    color: #fff;
    z-index: 1000;
    width: 50%;

    #detals p:first-child {
        margin: 10px 0 0;
    }

    #detals h2 {
        margin: 0 0 10px 0;
    }

    #type {
        display: flex;
        gap: 5px;
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

    width: 50%;
    position: relative;

    background: url(${Pokeball}) center center no-repeat;
    background-size: 99%;

    height: 190px;

    img {
        position: absolute;

        bottom: 65px;


        height: 180px;
        width: 180px;
    }

    button {
        width: 146px;
        height: 38px;
        border: none;
        border-radius: 8px;

        font-size: 16px;
        font-weight: 400;

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
    text-transform: capitalize;

    width: 106px;
    height: 31px;


    div{

        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 106px;
        height: 31px;

        border: 1px dashed rgba(255, 255, 255, 0.541);
        border-radius: 8px;
        background-color: #FBD200;
    }

    img {
        width: 20px;
        height: 20px;
    }


    #fire {background-color: #af5718;}
    #fighting{background-color: #884115}

    #water {background-color: #0e517a;}
    #dragon {background-color: #23526b}
    #ice {background-color: #314a52}

    #electric {background-color: #807636;}

    #normal {background-color: #747b7e;}
    #steel {background-color: #445657}
    #flying {background-color: #5b5e5e}
    #dark {background-color: #504a4a}

    #ground {background-color: #ad9c2e}
    #rock {background-color: #645513}

    #grass {background-color: #698d34}
    #bug {background-color: #4b6929}

    #poison {background-color: #724f7c}
    #ghost {background-color: #372c47}

    #fairy {background-color: #b182a2}
    #psychic {background-color: #7a355e}



`

