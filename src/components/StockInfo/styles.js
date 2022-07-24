import styled from 'styled-components';

export const Container = styled.div` 
    color: white;
    border: 1px solid ${({ theme }) => theme.colors.background.alternativeDarker};
    border-radius: 4px;
    padding: 16px;
    margin: 16px auto;
    width: 100%;

    h3 {
    font-weight: 400;
    }
`;

export const GridContainer = styled.dl`
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 8px;
    /* padding: 10px; */


    dt {
        font-size: 0.675rem;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.elements.dark};
    }

    dt:nth-of-type(1) { //dt ação
        display: none;
    }

    dd:nth-of-type(1) { //dd symbol
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 3;
        font-size: 1.475rem;
        display: flex;
        align-items: center;
        font-weight: 700;
    }

    dt:nth-of-type(2) { //dt valor
        grid-column-start: 3;
        grid-column-end: 4;
        grid-row-start: 1;
        grid-row-end: 2;
    }

    dd:nth-of-type(2) { //dd value
        grid-column-start: 3;
        grid-column-end: 4;
        grid-row-start: 2;
        grid-row-end: 3;
    }

    dt:nth-of-type(3) { //dt alta baixa
        grid-column-start: 4;
        grid-column-end: 5;
        grid-row-start: 1;
        grid-row-end: 2;
    }

    dd:nth-of-type(3) { //dd variation
        grid-column-start: 4;
        grid-column-end: 5;
        grid-row-start: 2;
        grid-row-end: 3;
    }

    dt:nth-of-type(4) { //dt sobre
        grid-column-start: 1;
        grid-column-end: 5;
        grid-row-start: 3;
        grid-row-end: 4;
        display: none;
    }

    dd:nth-of-type(4) { //dd about
        grid-column-start: 1;
        grid-column-end: 5;
        grid-row-start: 4;
        grid-row-end: 5;  
        white-space: nowrap; 
        overflow: hidden;
        text-overflow: ellipsis; 
    }

`;
