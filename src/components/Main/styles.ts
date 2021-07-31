import styled, { css } from 'styled-components';

import {
  ArrowLeft,
  Home,
  Search,
  Notifications,
  Email,
} from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: min(601px, 100%);

  @media (min-width: 500px) {
    border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline);
  }
`;

export const Header = styled.header`
  z-index: 2;
  position: sticky;
  top: 0;
  background: var(--primary);

  display: flex;
  align-items: center;

  text-align: left;

  padding: 0px 0 9px 13px;
  border-bottom: 1px solid var(--outline);

  > button {
    padding: 8px;
    border-radius: 50%;

    cursor: pointer;

    &:hover {
      background: var(--twitter-dark-hover);
    }
  }
`;

export const BackIcon = styled(ArrowLeft)`
  height: 24px;
  width: 24px;

  fill: var(--twitter);
`;

export const ProfileInfo = styled.div`
  margin-left: 17px;

  display: flex;
  flex-direction: column;

  > strong {
    font-size: 19px;
  }

  > span {
    font-size: 15px;
    color: var(--gray);
  }
`;

export const BottomMenu = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;

  display: flex;
  justify-content: space-between;

  background: var(--primary);
  width: 100%;
  border-top: 1px solid var(--outline);

  padding: 8px min(46px, max(10vw, 10px));

  @media (min-width: 600px) {
    display: none;
  }
`;

const getBottomIconStyles = () => css`
  height: 31px;
  width: 31px;

  cursor: pointer;
  fill: var(--gray);

  &:hover,
  &.active {
    fill: var(--twitter);
  }
`;

export const HomeIcon = styled(Home)`
  ${getBottomIconStyles()}
`;
export const SearchIcon = styled(Search)`
  ${getBottomIconStyles()}
`;
export const BellIcon = styled(Notifications)`
  ${getBottomIconStyles()}
`;
export const EmailIcon = styled(Email)`
  ${getBottomIconStyles()}
`;
