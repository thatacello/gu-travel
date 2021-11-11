import styled from 'styled-components';

export const HeaderContainer = styled.section`
    background-color: #FFF;
    padding: 2.75rem 6.25rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-content: center;
    flex-direction: row;

    .login {
        font-family: Nunito;
        font-size: 1.8rem;
        width: 13rem;
        background-color: #6B3C85;
        color: #FFF;
        padding: 0.6rem 1.6rem;
        border-radius: 30px;
        border: none;
        text-decoration: none;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        text-align: center;
    }
    svg {
        width: 22rem;
    }
`;