// @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');


import { createGlobalStyle } from "styled-components";

export const GlobalContainer = createGlobalStyle`
    	body{
                background-color: #5E5E5E;
                min-height: 100vh;
                font-family: 'Roboto', sans-serif;
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                background-color: #5E5E5E;
                min-height: 100vh;
                &::-webkit-scrollbar {
                        width: 0px;
                        background: transparent;
                }

                &::-webkit-scrollbar-thumb {
                        background: transparent;
                }

                &::-webkit-scrollbar-track {
                        background: transparent;
                }

                &::-webkit-scrollbar-corner {
                        background: transparent;
                }

                &::-webkit-scrollbar-resizer {
                        background: transparent;
                }

                &::-webkit-scrollbar-button {
                        background: transparent;
                }

                &.element {overflow: -moz-scrollbars-none; }


        }

        header{
                background-color: #fff;
        }

`

export const backgroundColor = "#5E5E5E"

export const color = "#ffffff"