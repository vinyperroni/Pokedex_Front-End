import styled from "styled-components";

export const Container = styled.div`
    z-index: 3;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;    
    width: 100%;
    padding: 0.75em 0;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
    background-color: rgba(255,255,255,0.75);
    backdrop-filter: blur(0.75em);
    
    div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-width: 32em;
    }
    
    button {
        display: flex;
        cursor: pointer;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-width: 12em;
        min-height: 4em;
        color: white;
        border: none;
        border-radius: 0.5em;
        background-color: #0099e0;
        transition: all 0.25s ease-in-out;
        .icon{
            display: none;
        }

        &:hover {
            transform: scale(1.1);
        }

        strong {
            font-size: 1.5em;
        }
        svg {            
            min-width: 2em;
            height: 100%;
        }
    }

    img {
        width: min(42vw, 12em);
        max-width: 12em;
        transition: all 0.25s ease-in-out;
    }


    @media (max-width: 560px) {
        button {
            max-width: 4em;        
            .icon{
                display: block;
        }
        }

        .big-screen {
            display: none;
        }
    }

    @media (max-width: 320px) {
        button {
            max-width: 3em;
            min-height: 3em;
        }

        .big-screen {
            display: none;
        }
    }
`