import styled from 'styled-components';

const Container = styled.div`
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

export default Container;
