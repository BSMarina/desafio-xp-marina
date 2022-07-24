import styled from 'styled-components';

export const Container = styled.div` 
    color: white;
    border: 1px solid ${({ theme }) => theme.colors.background.alternativeDarker};
    border-radius: 4px;
    padding: 16px;
    margin: 8px auto;
    width: 100%;
`;

export const AccountContent = styled.div`
    display: flex;
    align-items: center;
    column-gap: 8px;
    
    img {
        filter: invert(83%) sepia(53%) saturate(3701%) hue-rotate(1deg) brightness(105%) contrast(97%);
    }

    h3 {
    font-weight: 400;
    }
`;

export const ValueContent = styled.div`
    display: flex;
    flex-direction: column;

    h3 {
        font-size: 0.675rem;
        text-transform: uppercase;
        color: ${({theme}) => theme.colors.elements.dark};
    }

    p {
        font-size: 1.125rem;
    }
    
`;