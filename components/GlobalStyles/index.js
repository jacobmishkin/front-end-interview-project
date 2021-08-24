import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        min-height: 100vh;
        background-color: white;
    }

    html, body {
        font-family: sofia-pro, sans-serif;
        font-style: normal;
        font-weight: 400;
        margin: 0;
        padding: 0;
    }
`;

export default GlobalStyles;
