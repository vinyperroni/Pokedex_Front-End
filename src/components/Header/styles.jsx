import styled from "styled-components";

export const Container = styled.div`
    z-index: 10;
    position: fixed;
    top: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-template-areas: 'button1 logo button2';
    
    width: 100vw;
    margin: 0 auto;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
    background-color: white;


    #logo {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50vw;
        height: 6em;
        margin: 0 auto;
        grid-area: logo;
        border: solid;
    }

    #btn{
        display: flex;
        justify-content: center;
        align-items: center;

        width: 100%;
        max-width: min(10vw, 24em);
        height: 60px;

        background: #33A4F5;
        border-radius: 8px;

        margin: 0 auto;
        grid-column: 3/3;

        font-size: 24px;
        color: white;
        text-decoration: none;
    }

    img {
        width: 100%;
        height: 85%;
    }

`