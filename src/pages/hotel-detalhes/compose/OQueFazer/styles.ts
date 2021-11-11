import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: unset;

  iframe {
    width: 100%;
    height: 100%;
  }

  img {
    width: 16.81rem;
    height: 6rem;
    border-radius: 20px;
  }

  article {
    font-size: 1.6rem;
    margin: 0.5rem 0 2rem 0;
  }
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
`;
export const Col = styled.div`
  display: flex;
  flex-direction: column;
  article {
    font-size: 1.2rem;
    text-align: center;
  }
`;
