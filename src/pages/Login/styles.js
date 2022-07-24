import styled from 'styled-components';

export const Container = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: space-between;
    /* max-width: 1980px;
    width: 100vw; */
    padding: 0 16px;
`;

export const ImgContent = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    width: 100%;
    flex-grow: 1;

    img {
        max-width: 160px;
    }
`;

export const FormContent = styled.form`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    row-gap: 14px;
    width: 100%;
    
    input {
        background-color: transparent;
        border-bottom: 2px solid ${({ theme }) => theme.colors.elements.white};
        border-style: none none solid none;
        box-shadow: none;
        color: ${({ theme }) => theme.colors.elements.white};
        font-size: 16px;
        height: 36px;
        outline: none;
        padding-left: 10px;
        transition: all 0.4s ease-in-out;
        width: 100%;
        
        :hover, :focus {
            border-bottom: 2px solid ${({ theme }) => theme.colors.elements.main};
        }

        :not(:placeholder-shown) {
            border-bottom: 2px solid ${({ theme }) => theme.colors.elements.main};
        }

        ::placeholder {
            color: ${({ theme }) => theme.colors.elements.darker};
        }
    }

    button {
        background-color: ${({ theme }) => theme.colors.elements.main};
        border-style: none;
        font-size: 16px;
        height: 36px;
        margin-top: 10px;
        width: 100%;
        
        :active {
            background-color: ${({ theme }) => theme.colors.elements.main}70;
        }

        :disabled{
            background-color: ${({ theme }) => theme.colors.elements.darker};
            color:  ${({ theme }) => theme.colors.elements.dark};
            cursor: not-allowed;
        }
    }
`;
