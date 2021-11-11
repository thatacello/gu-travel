import styled from 'styled-components';

export const InputContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  background: #ffffff;
  width: 80%;
  height: 6rem;
  border-radius: 40px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 0.5rem;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  flex-direction: row;

  .destino {
    font-size: 1.87rem;
    text-align: center;
    color: #6b3c85;
    width: 40%;
    height: 100%;
    border: none;
    border-radius: 40px;
    background-color: #e5e5e5;
    padding: 1.25rem;
  }

  .checkin {
    width: 30%;
  }

  .hospedes {
    width: 20%;
  }

  span {
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    justify-content: space-between;
  }

  input {
    font-size: 1.87rem;
    color: #6b3c85;
    text-align: center;
    border: none;
  }
  .search {
    width: 4rem;
    height: 4rem;
  }
`;

export const Icon = styled.img`
  width: 2.62rem;
  height: 2.62rem;
  margin: 1rem;
`;
