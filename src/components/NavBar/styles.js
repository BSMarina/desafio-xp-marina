import styled from 'styled-components';

const Container = styled.ul`
    display: flex;
    width: 100%;
    padding: 0 8px;
    position: relative;

    li {
        display: flex;
        justify-content: center;
        width: 50%;
        list-style: none;

        button {
            text-transform: uppercase;
            letter-spacing: 0.5px;
            font-size: 0.875rem;
            background-color: transparent;
            color: ${({ theme }) => theme.colors.elements.white};
            border: none;
            height: 40px;

            :hover, :active { 
                color: ${({ theme }) => theme.colors.elements.main}95;
                border-bottom: 1px solid ${({ theme }) => theme.colors.elements.main}95;
                transition: all 0.1s ease-in;
            }

        }
    }

    .active {
        color: ${({ theme }) => theme.colors.elements.white};
        border-bottom: 1px solid ${({ theme }) => theme.colors.elements.main};
    }

    .inactive {
        color: ${({ theme }) => theme.colors.elements.darker};
        border-bottom: 1px solid transparent;
    }

    ::before {
        content:'';
        display: block;
        width: 100vw;
        background-color: ${({ theme }) => theme.colors.background.alternativeDarker};
        position: absolute;
        bottom: 0;
        height: 1px;
        z-index: -1;
        left: -16px;
    }
`;

export default Container;
