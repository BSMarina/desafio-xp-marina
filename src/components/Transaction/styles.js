import styled from 'styled-components';

export const Container = styled.form`
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    row-gap: 24px;
    padding-bottom: 16px;

    div {
        color: white;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    label {
        color: ${({theme}) => theme.colors.elements.darker};
    }

    input {
        flex-grow: 1;
        width: 100%;
        text-align: center;
        font-size: 3.75rem;
        background-color: transparent;
        border: none;
        color: ${({theme}) => theme.colors.elements.white};
        position: relative;

        /* :before {
            content: 'Escolha a quantidade';
            position: absolute;
            text-transform: uppercase;
            color: ${({theme}) => theme.colors.elements.darker};
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100px;
            height: 40px;
        } */

        ::placeholder {
            color: ${({theme}) => theme.colors.elements.darker};
            font-weight: 700;
        }

        :focus, :hover {
            border: none;
            outline: none;
        }
    }

    /* button {
        height: 40px;
        width: 100%;
        background-color: ${({theme}) => theme.colors.elements.main};
        border-style: none;
        font-size: 16px;

        :active {
            background-color: ${({theme}) => theme.colors.elements.main}70;
        }

        :disabled{
            background-color: ${({theme}) => theme.colors.elements.darker};
            color:  ${({theme}) => theme.colors.elements.dark};
            cursor: not-allowed;
        }
    } */

`;