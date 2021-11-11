import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 60%;
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2rem;
  
  .title {
    font-size: 1.25rem;
  }
  .card-car {
    padding: 1rem;
    border-radius: 20px;

    img {
      border-radius: 20px;
    }
  }
  svg {
    width: 1rem;
    height: 1rem;
    margin-bottom: 0.5rem;
  }
`;
