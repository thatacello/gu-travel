import styled from 'styled-components';

export const CardContainer = styled.div`
  height: 30rem;
  width: 60%;
  background-color: #FFF;
  border-radius: 16px; 
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2rem;

  .title {
      font-size: 2rem;
      margin: 1rem;
  }
  .subtitle {
      font-size: 1.5rem;
      margin: 1rem;
  }
  .small {
      font-size: 1rem;
      margin: 1rem;
  }
  img {
      width: 20rem;
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
