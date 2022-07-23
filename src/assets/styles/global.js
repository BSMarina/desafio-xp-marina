import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }

    body {
        background-color: #FFFFFF;
        font-size: 16px;
    }

    button {
        cursor: pointer;
    }
`;