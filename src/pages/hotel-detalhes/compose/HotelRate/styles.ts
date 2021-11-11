import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  width: 100%;
  height: unset;
  margin: 1rem 0;

  .rate {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 3.5rem;
    font-weight: 700;
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
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 4rem;
  gap: 2rem;

  svg {
    width: 1.8em;
    height: 1.8em;
  }
  .description {
    font-size: 1rem;
  }
  .title {
    font-size: 1.15rem;
  }
`;
export const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  width: 100%;
  height: unset;
  border-radius: 30px;
  background-color: #fff;
  padding: 1rem 2rem;
  gap: 2rem;
`;
export const Icon = styled.img`
  height: 2rem;
`;
export const Box = styled.div`
  width: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
