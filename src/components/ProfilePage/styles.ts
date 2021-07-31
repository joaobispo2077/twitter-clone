import styled, { css } from 'styled-components';

import { LocationOn, Cake } from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-height: 100%;
  overflow-y: auto;

  scrollbar-width: none; // Override default scrollbar width in Firefox
  ::-webkit-scrollbar {
    display: none; // Hide scrollbars in Chrome
  }
`;

export const Banner = styled.div`
  flex-shrink: 0;

  width: 100%;
  height: min(33vw, 199px);

  background: var(--twitter);
  position: relative;
`;

export const Avatar = styled.img`
  width: max(45px, min(135px, 22vw));
  height: max(45px, min(135px, 22vw));

  background: var(--gray);
  border: 3.75px solid var(--primary);
  border-radius: 50%;

  position: absolute;
  bottom: max(-60px, -10vw);
  left: 15px;
`;

export const ProfileData = styled.div`
  padding: min(calc(10vw + 7px), 67px) 16px 0;

  display: flex;
  flex-direction: column;

  position: relative;

  > h1 {
    margin-top: 4px;
    font-size: 19px;
    font-weight: bold;
  }

  > h2 {
    font-size: 15px;
    font-weight: normal;
    color: var(--gray);
  }

  > p {
    margin-top: 11px;

    font-size: 15px;
    > a {
      text-decoration: none;
      color: var(--twitter);

      &:hover {
        text-decoration: underline;
      }
    }
  }

  > ul {
    list-style: none;
    margin-top: 10px;
    margin-bottom: 10px;

    > li {
      display: flex;
      align-items: center;

      font-size: 15px;
      color: var(--gray);
    }
  }
`;

const getBannerIconsStyles = css`
  width: 20px;
  height: 20px;

  margin-right: 5px;

  fill: var(--gray);
`;

export const LocationIcon = styled(LocationOn)`
  ${getBannerIconsStyles}
`;

export const CakeIcon = styled(Cake)`
  ${getBannerIconsStyles}
`;

export const Followage = styled.div`
  display: flex;
  justify-content: flex-start;

  width: 100%;

  > span {
    font-size: 15px;
    color: var(--gray);

    & + span {
      margin-left: 20px;
    }
  }
`;
