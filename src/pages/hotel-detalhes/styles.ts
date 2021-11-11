import styled from 'styled-components';

export const Icon = styled.img`
  width: 4rem;
  height: 4rem;
`;
export const Col = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 2.5rem;
  font-weight: 700;
  padding: 4rem 7rem;
`;
export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;
export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  gap: 0.5rem;
  article {
    font-size: 1.5rem;
    font-weight: 700;
  }
`;
export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  gap: 2rem;
`;
export const ReserveButton = styled.button`
  border: none;
  background-color: #85D2D0;
  color: #FFF;
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  border-radius: 30px;
  padding: 1.2rem 5.5rem;
  margin: 1rem 0;
`;
