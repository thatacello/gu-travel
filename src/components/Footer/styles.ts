import styled from 'styled-components';

export const FooterContainer = styled.section`
    background-color: #6B3C85;
    padding: 0.87rem 6.25rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    position: initial;
    bottom: 0;
    width: 100%;
    gap: 1rem;
    
    a {
        font-family: Nunito;
        font-size: 1.25rem;
        color: #FFF;
        border: none;
        text-align: center;
    }
    svg {
        width: 22rem;
    }
`;

export const Small = styled.p`
    font-size: 0.8rem;
    color: #FFF;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-content: center;
    gap: 3rem;
    width: 100%;
`;