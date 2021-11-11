import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  align-content: center;
  flex-direction: column;
  justify-content: center;
`;
export const Icon = styled.img``;
export const Col = styled.section`
  width: 45%;
  height: unset;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: column;
  padding: 5rem;
  gap: 2rem;

  .login-email {
    background: #fff;
    font-size: 1.5rem;
  }
  .logo {
    width: 21rem;
  }
  .gmail {
    width: 2rem;
    margin-right: 1rem;
  }
  .subtitle {
    font-size: 1.25rem;
    color: rgba(0, 0, 0, 0.5);
  }
  .input-form {
    height: 4rem;
    background: #ffffff;
    border: 1px solid #b073d1;
    border-radius: 30px;
  }
  form {
    width: 100%;
  }
  .text {
    label {
      font-size: 2rem;
      padding: 0 1rem;
    }
  }
  .text-bottom {
    font-size: 2rem;
  }
  .entrar {
    width: 100%;
    background: #6b3c85;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    color: #fff;
    padding: 0.5rem 2rem;
    font-size: 2rem;
    height: 4rem;
    margin-top: 1rem;
  }
`;
export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const LoginButton = styled.button`
  width: 100%;
  border: none;
  border-radius: 2rem;
  gap: 1rem;
  padding: 1rem 2rem;
`;
export const ImageContent = styled.img`
  width: 130%;
  margin: -10rem -10rem -10rem 5rem;
`;
