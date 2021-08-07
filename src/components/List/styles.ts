import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  background: var(--secondary);
  border-radius: 14px;
  overflow: hidden;
`;

export const Item = styled.li`
  /* border-radius: 9999px; */
  padding: 10px 16px;
  background: var(--secondary);
  &:first-child {
    padding-top: 13px;
  }

  & + li {
    border-top: 1px solid var(--outline);
  }

  &:last-child {
    padding-bottom: 17px;
  }
`;

export const Title = styled.li`
  font-weight: bold;
  font-size: 19px;
`;
