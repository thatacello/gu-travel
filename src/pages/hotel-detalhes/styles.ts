import styled from 'styled-components';

export const Main = styled.div`
  width: 100%;
  height: unset;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0;
`;
export const Icon = styled.img`
  width: 4rem;
  height: 4rem;
`;
export const Col = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  justify-content: center;
  gap: 4rem;
`;
export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  gap: 0.5rem;
  article {
    font-size: 1.5rem;
    font-weight: 700;
  }
`;
export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 2rem;
`;
export const ReserveButton = styled.button`
  border: none;
  background-color: #85d2d0;
  color: #fff;
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  border-radius: 30px;
  padding: 1.2rem 5.5rem;
  margin: 1rem 0;
`;
