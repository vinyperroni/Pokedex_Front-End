import styled from "styled-components";

export const Container = styled.div`


    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-template-areas: 'button1 logo button2';
    

    max-width: 1280px;
    margin: 0 auto;



    #logo {
        margin: 0 auto;
        grid-area: logo;
    }

    #btn{
        display: flex;
        justify-content: center;
        align-items: center;

        width: 220px;
        height: 60px;

        background: #33A4F5;
        border-radius: 8px;

        margin: 0 auto;
        grid-column: 3/3;

        font-size: 24px;
        color: white;
        text-decoration: none;

    }

`