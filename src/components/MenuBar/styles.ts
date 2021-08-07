import styled, { css } from 'styled-components';

import {
  Home,
  Notifications,
  Email,
  FavoriteBorder,
  Person,
  DotsHorizontalRounded,
  Twitter,
} from '../../styles/Icons';

export const Container = styled.aside`
  display: none;

  @media (min-width: 500px) {
    display: flex;
    flex-direction: column;

    justify-content: space-between;

    position: sticky;
    top: 0;
    left: 0;

    padding: 9px 19px 20px;
    max-height: 100vh;
    overflow-y: auto;
  }
`;

export const TopSide = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  @media (min-width: 1200px) {
    align-items: flex-start;
  }
`;

export const Logo = styled(Twitter)`
  width: 41px;
  height: 41px;

  & > path {
    fill: var(--twitter);
  }

  margin-bottom: 20px;
`;

export const MenuButtom = styled.button`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  padding: 12px;

  & + button {
    margin-top: 16.5px;
  }

  & + button:last-child {
    margin-top: 33px;

    width: 40px;
    height: 40px;

    > span {
      display: none;
    }

    @media (min-width: 1200px) {
      width: 100%;
      height: unset;

      > span {
        display: inline;
      }
    }
  }

  cursor: pointer;

  border-radius: 25px;

  &:hover {
    background: var(--twitter-dark-hover);
  }

  &:hover,
  &.active {
    & > span {
      color: var(--twitter);
    }

    & > svg {
      fill: var(--twitter);
    }
  }

  > span {
    display: none;
  }

  @media (min-width: 1200px) {
    padding-right: 15px;

    > span {
      display: inline;
      margin-left: 19px;

      font-weight: bold;
      font-size: 19px;
    }
  }
`;

const iconStyles = css`
  flex-shrink: 0;

  width: 30px;
  height: 30px;
  color: var(--white);
`;

export const HomeIcon = styled(Home)`
  ${iconStyles}
`;

export const BellIcon = styled(Notifications)`
  ${iconStyles}
`;

export const EmailIcon = styled(Email)`
  ${iconStyles}
`;

export const FavoriteIcon = styled(FavoriteBorder)`
  ${iconStyles}
`;

export const ProfileIcon = styled(Person)`
  ${iconStyles}
`;

export const BotSide = styled.div`
  margin-top: 20px;

  display: flex;
  align-items: center;

  cursor: pointer;

  padding: 12px;
  border-bottom-left-radius: 9999px;
  border-bottom-right-radius: 9999px;
  border-top-right-radius: 9999px;
  border-top-left-radius: 9999px;

  &:hover {
    background: var(--twitter-dark-hover);
  }
`;

export const Avatar = styled.img`
  height: 39px;
  width: 39px;

  flex-shrink: 0;

  border-radius: 50%;
  background: var(--gray);
`;

export const ProfileData = styled.div`
  display: none;

  @media (min-width: 1200px) {
    display: flex;
    flex-direction: column;

    align-items: flex-start;

    margin-left: 10px;
    font-size: 14px;

    > span {
      color: var(--gray);
    }
  }
`;

export const OptionsIcon = styled(DotsHorizontalRounded)`
  display: none;

  @media (min-width: 1200px) {
    display: inline;

    height: 25px;
    width: 25px;
    color: var(--white);

    margin-left: 30px;
    cursor: pointer;
  }
`;
