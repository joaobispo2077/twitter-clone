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
        <Avatar
          src="https://pbs.twimg.com/profile_images/1411516021157027841/pMVel5Rh_400x400.jpg"
          alt="Perfil da conta 90sVisuals"
        />
        <Content>
          <Header>
            <strong>90s</strong>
            <span>@90sVisuals</span>
            <Dot />
            <time>07 de Ago</time>
          </Header>

          <Description>Mood for this weekend:</Description>

          <ImageContent
            src="https://pbs.twimg.com/media/E8HqG-fXEAEPoe_?format=jpg&name=small"
            alt="Jovem adulto desenhado em anime estudando no final de semana"
          />

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
              59
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
