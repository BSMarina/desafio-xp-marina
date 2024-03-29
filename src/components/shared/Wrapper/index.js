import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 16px;
    flex-grow: 1;

    main {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
    }

    @media (min-width: 768px) {
        max-width: 600px;
        width: 100%;
        margin: 0 auto;
    }
`;

export default Wrapper;
