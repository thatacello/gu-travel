import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  width: 45%;
  background: #f7f3f3;
  border-radius: 50px;
  padding: 5rem;
  margin-top: 2rem;

  .title {
    font-size: 2rem;
  }
  .fields {
    font-size: 1.5rem;
    margin-top: 1rem;
    text-align: left;
  }
  .inputField {
    border: 1px solid #b073d1;
    box-sizing: border-box;
    border-radius: 30px;
    background: #ffffff;
    height: 3rem;
    padding: 1rem;
  }
  .cadastrar {
    border: none;
    background: #6b3c85;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    width: 100%;
    margin-top: 3rem;
    color: #fff;
    height: 3rem;
  }
  .text-bottom {
    margin-top: 3rem;
    font-size: 2rem;
  }
`;
export const ContainerCadastro = styled.div`
  width: 100%;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
`;
export const Icon = styled.img`
  width: 21rem;
`;
export const Input = styled.input`
  width: 100%;
`;
export const Button = styled.button`
  width: 100%;
`;
