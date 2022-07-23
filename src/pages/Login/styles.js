import styled from 'styled-components';

export const Container = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-around;
    max-width: 1980px;
    width: 100vw;
`;

export const ImgContent = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 50%;
`;

// export const FormContent = styled.form`
//     align-items: center;
//     display: flex;
//     flex-direction: column;
//     margin-bottom: 20px;
//     row-gap: 14px;
//     width: 50%;
    
//     input {
//         background-color: transparent;
//         border-bottom: 2px solid ${({theme}) => theme.colors.elements.white};
//         border-radius: 5px;
//         border-style: none none solid none;
//         box-shadow: none;
//         color: ${({theme}) => theme.colors.elements.main};
//         font-size: 16px;
//         height: 36px;
//         outline: none;
//         padding-left: 10px;
//         transition: all 0.4s ease-in-out;
//         width: 40%;
        
//         :hover, :focus {
//             background-color: ${({theme}) => theme.colors.background.alternative}70;
//             border: 2px solid ${({theme}) => theme.colors.elements.white};
//         }
//     }

//     button {
//         background-color: ${({theme}) => theme.colors.elements.main};
//         border-radius: 5px;
//         border-style: none;
//         font-size: 16px;
//         height: 36px;
//         margin-top: 10px;
//         width: 40%;
        
//         :active {
//             background-color: ${({theme}) => theme.colors.elements.main}70;
//         }

//         :disabled{
//             background-color: ${({theme}) => theme.colors.background.alternativeDarker};
//             cursor: not-allowed;
//         }
//     }
    // `;
