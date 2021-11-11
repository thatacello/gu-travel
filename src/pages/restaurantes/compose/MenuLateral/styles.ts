import styled from 'styled-components';

export const Container = styled.div`
  height: unset;
  width: 35%;
  background-color: #FFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;

  article {
    font-size: 1.5rem;
    margin: 1.25rem 0;
  }
  input {
    width: 2rem;
    height: 2rem;
  }
  label {
    display: flex;
    align-items: center;
  }
  
`;
export const Col = styled.div`
  display: flex;
  flex-direction: column;
  svg {
    width: 1.8rem;
    height: 1.8rem;
    margin-bottom: 0.5rem;
  }
  span>span {
  position: relative;
  display: block;
  width: 1.5rem;
  height: 1.5rem;
  border: 1px solid #85D2D0;
  background: #FFF;
  margin: 0.25rem;
  }
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  .price {
    font-size: 1.15rem;
    text-align: center;
    width: 40%;
    height: 2rem;
    border: 1px solid #85D2D0;
    border-radius: 10px;
    background-color: #FFF;
    padding: 1.25rem;
  }
`;
export const Small = styled.p`
  font-size: 1rem;
  text-align: start;
  margin-right: 0.5rem;
`;
