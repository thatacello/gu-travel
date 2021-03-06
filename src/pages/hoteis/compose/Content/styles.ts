import styled from 'styled-components';

export const ContentContainer = styled.div`
  width: 100%;
  height: unset;
  padding: 4rem 5rem;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;

  .title {
    font-size: 2.5rem;
  }
  .subtitle {
    font-size: 2rem;
  }
  .row {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 4rem 0;
    div {
      width: 18rem;
    }
  }
  .card-title {
    font-size: 2rem;
    color: #6b3c85;
    line-height: 41px;
    font-weight: bold;
    text-align: center;
    padding: 1rem;
  }
  .card-subtitle {
    font-size: 1.25rem;
    text-align: center;
  }
  div {
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
  .hotel-card {
    width: 18rem;

    img {
      width: 12rem;
    }
  }
`;
export const Header = styled.section`
  width: 100%;
`;
