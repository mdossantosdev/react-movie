import styled from 'styled-components';

export const StyledActor = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--white);
  background-color: var(--secondaryColor);
  border-radius: 1rem;
  text-align: center;
`;

export const ActorName = styled.p`
  font-size: 1rem;
  font-weight: 700;
`;

export const ActorCharacter = styled.p`
  font-size: 1rem;
  font-style: italic;
`;
