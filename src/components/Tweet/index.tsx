import React from 'react';

import {
  Container,
  Retweeted,
  TwitterIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <TwitterIcon />
        Você retweetou
      </Retweeted>
      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>90s</strong>
            <span>@90sVisuals</span>
            <Dot />
            <time>28 de mai</time>
          </Header>

          <Description></Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              15
            </Status>
            <Status>
              <RetweetIcon />
              50
            </Status>
            <Status>
              <LikeIcon />
              17
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
