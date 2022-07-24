import styled from 'styled-components';
// import test from '../../assets/images/test.png'

export const PContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.background.alternativeDarker};
    display: flex;
    height: 100%;
    flex-grow: 1;
    justify-content: start;
    flex-direction: column;
    align-items: center;
    margin: 16px auto;
    width: 100%;
    border-radius: 4px;
    padding: 16px;

    p {
        color: ${({ theme }) => theme.colors.elements.white};
    }
`;

export const Table = styled.table`
    width: 100%;
    color: ${({ theme }) => theme.colors.elements.white};
    border-spacing: 4px;

    tr {
        height: 40px;
        position: relative;

        :first-of-type {
            height: auto;

            ::after {
                background-color: transparent;
            }
        }

        td:last-of-type {
            display: flex;
            justify-content: end;
            height: 40px;
            align-items: center;
        }

        ::after {
            content: '';
            display: block;
            height: 1px;
            width: 100%;
            position: absolute;
            bottom: 0;
            background-color: ${({ theme }) => theme.colors.elements.white}20;
            left: 0;
        }
        
        th {
            padding-bottom: 8px;
            text-transform: uppercase;
            text-align: left;
            font-size: 0.675rem;
            font-weight: 400;
            color: ${({ theme }) => theme.colors.elements.darker};
        }
    }


    button {
        background-color: ${({ theme }) => theme.colors.elements.main};
        border: none;
        display: flex;
        justify-content: center;
        height: 24px;
        width: 24px;
        align-items: center;
    }

    .positive {
        color: ${({ theme }) => theme.colors.stocks.positive}
    }

    .negative {
        color: ${({ theme }) => theme.colors.stocks.negative}
    }

`;
