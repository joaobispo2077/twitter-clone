import styled from 'styled-components';

import { Twitter, Chat, Favorite } from '../../styles/Icons';

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

export const TwitterIcon = styled(Twitter)`
  height: 20px;
  width: 20px;

  margin-left: 36px;
  margin-right: 9px;

  fill: var(--gray);
`;

export const Body = styled.div`
  display: flex;
  margin-top: 3px;

  position: relative;
`;

export const Avatar = styled.div`
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

export const Dot = styled.div`
  background-color: var(--gray);
  height: 2px;
  width: 2px;
  margin: 0 10px;
`;

export const Description = styled.div``;

export const ImageContent = styled.div``;

export const Icons = styled.div``;

export const Status = styled.div``;

export const CommentIcon = styled.div``;

export const RetweetIcon = styled.div``;

export const LikeIcon = styled.div``;
