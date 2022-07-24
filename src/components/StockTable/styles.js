import styled from 'styled-components';

export const PContainer = styled.div`
    background-color: ${({theme}) => theme.colors.background.alternativeDarker};
    display: flex;
    height: 100%;
    flex-grow: 1;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 16px auto;
    width: 100%;
    border-radius: 4px;
    padding: 16px;

    p {
        color: ${({theme}) => theme.colors.elements.white};
    }
`;

export const Table = styled.table`
    width: 100%;
    color: ${({theme}) => theme.colors.elements.white};

    tr {
        height: 40px;
        position: relative;

        :first-of-type {
            height: auto;

            th {
                padding-bottom: 8px;
                text-transform: uppercase;
            }

            ::after {
                background-color: ${({theme}) => theme.colors.elements.main};
            }
        }

        td:last-of-type {
            text-align: center;
        }

        ::after {
            content: '';
            display: block;
            height: 1px;
            width: 100%;
            position: absolute;
            bottom: 0;
            background-color: ${({theme}) => theme.colors.elements.white}20;
            left: 0;
        }
    }

    th {
        text-align: left;
    }

    button {
        background-color: ${({theme}) => theme.colors.elements.main};
        border: none;
        display: flex;
        justify-content: center;
        height: 24px;
        width: 100%;
    }

    .positive {
        color: ${({theme}) => theme.colors.stocks.positive}
    }

    .negative {
        color: ${({theme}) => theme.colors.stocks.negative}
    }

`;