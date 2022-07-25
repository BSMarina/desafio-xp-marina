import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    #root {
        flex-direction: column;
        display: flex;
        flex-grow: 1;
        min-height: 100vh - 56px;
    }

   * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'IBM Plex Sans', sans-serif;

    }

    body {
        background-color: ${(props) => props.theme.colors.background.main};
        font-size: 14px;
    }

    button {
        cursor: pointer;
    }
`;
