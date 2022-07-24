import styled from 'styled-components';

const Container = styled.header`
    background-color: ${({theme}) => theme.colors.background.alternative};
    color: ${({theme}) => theme.colors.elements.white};
    display: flex;
    width: 100vw;
    justify-content: space-around;
    font-size: 8px;
    height: 50px;
`;

export default Container;