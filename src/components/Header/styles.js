import styled from 'styled-components';

export const Container = styled.header`
    background-color: ${({theme}) => theme.colors.background.main};
    display: flex;
    width: 100vw;
    justify-content: space-between;
    height: 50px;
    padding: 8px;
`;

export const IconContent = styled.button`
    button {
        background-color: ${({theme}) => theme.colors.background.main};
        border: none;
        border-style: none;
        box-shadow: none;

        img {
            filter: invert(83%) sepia(53%) saturate(3701%) hue-rotate(1deg) brightness(105%) contrast(97%);
        }
    }
`;

export const UserContent = styled.div`
    color: ${({theme}) => theme.colors.elements.white};
    display: flex;
    font-size: 8px;
    align-items: center;
    column-gap: 8px;

    h2 {
        align-self: flex-end;
        margin-bottom: 5px;
    }

    button {
        background-color: ${({theme}) => theme.colors.elements.main};
        border-radius: 5px;
        border-style: none;
        font-size: 16px;
        padding: 5px;
        outline: none;
        
        :active {
            background-color: ${({theme}) => theme.colors.elements.main}70;
        }
    }
`;