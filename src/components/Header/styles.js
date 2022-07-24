import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.background.alternativeDarker};
`;

export const Container = styled.header`
    padding: 0 16px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-content: center;
    height: 56px;
`;

export const IconContent = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    
    button {
        background-color: transparent;
        border: none;
        border-style: none;
        box-shadow: none;
        height: 40px;
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            filter: invert(83%) sepia(53%) saturate(3701%) hue-rotate(1deg) brightness(105%) contrast(97%);
        }
    }
`;

export const UserContent = styled.div`
    color: ${({ theme }) => theme.colors.elements.white};
    display: flex;
    align-items: center;
    column-gap: 8px;

    p {
        font-size: 0.675rem;
    }

    button {
        background-color: ${({ theme }) => theme.colors.elements.main};
        border-style: none;
        padding: 0 8px;
        outline: none;
        height: 40px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        
        :active {
            background-color: ${({ theme }) => theme.colors.elements.main}70;
        }
    }
`;
