import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  cursor: pointer;
  transition: opacity 300ms ease-in-out;

  &:hover {
    opacity: 0.7;
  }
  > div {
    display: flex;
    flex-direction: column;

    font-size: 14px;

    > span {
      color: var(--gray);
      margin-bottom: 3px;
    }
  }

  > img {
    height: 68px;
    width: 68px;
    border-radius: 10px;
    object-fit: cover;
  }
`;
