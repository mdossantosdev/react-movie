import styled from 'styled-components';

export const StyledGrid = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2vw;
`;

export const Title = styled.h2`
  font-size: 4vh;

  @media screen and (max-width: 768px) {
    font-size: 2vh;
  }
`;

export const StyledGridContent = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(100px, 1fr));
  grid-gap: 2rem;
  justify-items: center;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(4, minmax(100px, 1fr));
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, minmax(100px, 1fr));
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, minmax(100px, 1fr));
  }

  @media screen and (max-width: 375px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
