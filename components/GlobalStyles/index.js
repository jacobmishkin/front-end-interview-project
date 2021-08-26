import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body {
        min-height: 100vh;
        background-color: #E5E5E5;
    }

    html, body {
        font-family: sofia-pro, sans-serif;
        font-style: normal;
        font-weight: 400;
        margin: 0;
        padding: 0;
    }
    a {
        text-decoration: none;
    }
		li {
			list-style: none;
		}
`;

export default GlobalStyles;
