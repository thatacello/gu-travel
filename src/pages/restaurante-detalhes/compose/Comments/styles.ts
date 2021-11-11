import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  width: 100%;
  height: unset;
  margin: 1rem 0;
  .form {
    width: 100%;
  }
  .comment {
    background: #FFF;
    padding: 5px 16px;
    border-radius: 10px;
    margin: 1rem 0;
  }
  button {
    width: 100%;
    height: 3rem;
    font-size: 1rem;
    font-weight: bold;
    letter-spacing: 0.05em;
    background: #85d2d0;
    border-radius: 25px;
    color: #fff;
    padding: 0.5rem;
  }
  a {
    text-align: center;
    font-size: 1.12rem;
  }
`;
export const Col = styled.div`
  display: flex:
  flex-direction: column;
  align-items: center;
  align-content: center;
  width: 100%;
`;
export const Row = styled.div`
  display: flex:
  align-items: center;
  align-content: center;
  width: 100%;
`;

export const TextArea = styled.textarea`
  width: 100%;
  border: none;
  padding: 1rem;
  border-radius: 10px;
  font-size: 1rem;
`;
