import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Tab = styled.div`
  margin-top: 10px;
  padding: 11px 0 15px;

  font-weight: bold;
  font-size: 15px;

  cursor: pointer;

  color: var(--twitter);

  text-align: center;

  &.active {
    border-bottom: 2px solid var(--twitter);
  }

  &:hover {
    background: var(--twitter-dark-hover);
  }
`;

export const Tweets = styled.ul`
  display: flex;
  flex-direction: column;

  flex-shrink: 0;
`;
