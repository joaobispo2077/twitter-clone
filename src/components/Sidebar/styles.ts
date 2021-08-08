import styled from 'styled-components';

import { Search } from '../../styles/Icons';

export const Container = styled.div`
  display: none;

  @media (min-width: 1000px) {
    display: flex;
    flex-direction: column;

    width: min(399px, 100%);
  }
`;

export const SearchWrapper = styled.div`
  padding: 10px 24px;

  width: min(399px, 100%);

  background: var(--primary);
  position: fixed;
  top: 0;
  z-index: 2;
  max-height: 57px;
`;

export const SearchBar = styled.div`
  width: 100%;
  height: 39px;

  font-size: 14px;
  padding: 0 10px 0 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  border-radius: 19.5px;
  background: var(--search);
  color: var(--gray);
  position: relative;
  border: 1px solid var(--search);

  &.active {
    border: 1px solid var(--twitter);
  }
`;

export const SearchIcon = styled(Search)`
  width: 27px;
  height: 27px;

  margin: 0 12px 0 4px;

  color: var(--gray);

  &.active {
    fill: var(--twitter);
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 38px;
  background: var(--search);
  color: var(--gray);
  border-radius: 19.5px;

  outline: 0;

  &::placeholder {
    color: var(--gray);
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;

  padding: 57px 24px 200px;
  margin-top: 3px;

  > ul + ul {
    margin-top: 15px;
  }
`;
