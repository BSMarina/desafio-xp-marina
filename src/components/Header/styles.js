import styled from 'styled-components';

export const Container = styled.header`
    background-color: ${({theme}) => theme.colors.background.alternative};
    color: ${({theme}) => theme.colors.elements.white};
    display: flex;
    width: 100vw;
    justify-content: space-between;
    height: 50px;
    padding: 8px;
`;

export const UserContent = styled.div`
    color: ${({theme}) => theme.colors.elements.white};
    display: flex;
    font-size: 8px;
    align-items: center;
    column-gap: 8px;

    button {
        background-color: ${({theme}) => theme.colors.elements.main};
        border-radius: 5px;
        border-style: none;
        font-size: 16px;
        padding: 5px;
        
        :active {
            background-color: ${({theme}) => theme.colors.elements.main}70;
        }
    }
`;