import styled, { css } from 'styled-components';

import { Chat, Favorite, Retweet } from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 14px 16px;

  border-bottom: 1px solid var(--outline);
  max-width: 100%;
`;

export const Retweeted = styled.div`
  display: flex;
  align-items: center;

  font-size: 13px;
  color: var(--gray);
`;

export const RetweetHeaderIcon = styled(Retweet)`
  height: 25px;
  width: 25px;

  margin-left: 36px;
  margin-right: 9px;

  fill: var(--gray);
`;

export const Body = styled.div`
  display: flex;
  margin-top: 3px;

  position: relative;
`;

export const Avatar = styled.img`
  width: 49px;
  height: 49px;
  border-radius: 50%;
  flex-shrink: 0;

  background-color: var(--gray);

  position: absolute;
  top: 0;
  left: 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 2px;
  padding-left: 59px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  font-size: 15px;
  white-space: nowrap;

  & > strong {
    margin-right: 5px;
  }

  > span,
  time {
    color: var(--gray);
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const Dot = styled.span`
  background-color: var(--gray);
  height: 2px;
  width: 2px;
  margin: 0 10px;
`;

export const Description = styled.p`
  font-size: 14px;
  margin-top: 4px;
`;

export const ImageContent = styled.img`
  margin-top: 12px;
  width: 100%;
  height: min(285px, max(175px, 41vw));

  border-radius: 14px;
  cursor: pointer;

  transition: opacity 300ms ease-in-out;

  &:hover {
    opacity: 0.7;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  margin: 11px auto 0;
  width: 100%;

  @media (min-width: 330px) {
    width: 75%;
  }

  > div {
    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Status = styled.div`
  display: flex;
  align-items: center;

  font-size: 14px;
  color: var(--gray);

  cursor: pointer;

  > svg {
    margin-right: 5px;
  }

  &:nth-child(1) {
    &,
    > svg path {
      color: var(--gray);
    }
  }

  &:nth-child(2) {
    color: var(--retweet);

    > svg {
      fill: var(--retweet);
    }
  }

  &:nth-child(3) {
    color: var(--like);

    > svg {
      fill: var(--like);
    }
  }
`;

const iconStyle = css`
  width: 19px;
  height: 19px;
`;

export const CommentIcon = styled(Chat)`
  ${iconStyle}
`;

export const RetweetIcon = styled(Retweet)`
  width: 28px;
  height: 28px;
`;

export const LikeIcon = styled(Favorite)`
  ${iconStyle}
`;
