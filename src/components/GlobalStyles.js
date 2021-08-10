import { createGlobalStyle } from "styled-components";
import {reset} from"styled-reset"

const GlobalStyle = createGlobalStyle`
    ${reset}
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-size:14px;
        color:white;
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background-color:rgba(20,20,20,10);
        padding-top:50px;
        padding-left:10px;
    }
`;

export default GlobalStyle;