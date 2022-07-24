import styled from 'styled-components';

const Container = styled.ul`
    display: flex;
    width: 100%;
    margin: 25px 0;
    padding: 0 4px;

    li {
        display: flex;
        justify-content: center;
        width: 50%;
        list-style: none;

        button {
            width: 90%;
            font-size: 16px;
            background-color: transparent;
            color: ${({theme}) => theme.colors.elements.white};
            border: none;
            border-bottom: 1px solid ${({theme}) => theme.colors.elements.white};

            :hover, :active { 
                color: ${({theme}) => theme.colors.elements.main}95;
                border-bottom: 1px solid ${({theme}) => theme.colors.elements.main}95;
                transition: all 0.1s ease-in;
            }

        }
    }

    .active {
        color: ${({theme}) => theme.colors.elements.main};
        border-bottom: 1px solid ${({theme}) => theme.colors.elements.main};
    }

    .inactive {
        color: ${({theme}) => theme.colors.elements.white}80;
        border-bottom: 1px solid ${({theme}) => theme.colors.elements.white}80;
    }
`;

export default Container;