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

    p {
        color: ${({theme}) => theme.colors.elements.white};
    }
`;
