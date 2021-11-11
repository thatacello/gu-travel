import styled from 'styled-components';

export const ContentContainer = styled.div`
  width: 80%;
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
`;
export const Header = styled.section`
  width: 100%;
`;
