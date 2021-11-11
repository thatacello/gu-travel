import styled from 'styled-components';

export const CardContainer = styled.div`
  height: 30rem;
  width: 60%;
  background-color: #fff;
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2rem;

  .title {
    font-size: 2rem;
  }
  .subtitle {
    font-size: 1.5rem;
  }
  .small {
    font-size: 1rem;
  }
  img {
    width: 20rem;
    border-radius: 20px;
  }
  div {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    height: 100%;
  }
`;
export const Col = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Icon = styled.img`
  width: 1rem;
  height: 1rem;
`;
