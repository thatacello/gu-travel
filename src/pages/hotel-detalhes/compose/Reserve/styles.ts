import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: unset;

  article {
    font-size: 1.5rem;
    font-weight: 700;
  }
`;
export const Col = styled.div`
  display: flex:
  flex-direction: column;
  align-items: center;
  align-content: center;
  width: 100%;

   button {
     border: none;
     background-color: #E5E5E5;
     color: #6B3C85;
     font-size: 1.25rem;
     font-weight: 700;
     letter-spacing: 0.05em;
     padding: 0.75rem 1.6rem;
     border-radius: 5px;
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
