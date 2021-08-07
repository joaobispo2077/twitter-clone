import React from 'react';

import { Container, Avatar, Info, FollowButton } from './styles';

type FollowSuggestionProps = {
  username: string;
  nickname: string;
  avatar: string;
};

const FollowSuggestion: React.FC<FollowSuggestionProps> = ({
  username,
  nickname,
  avatar,
}: FollowSuggestionProps) => {
  return (
    <Container>
      <div>
        <Avatar src={avatar} />

        <Info>
          <strong>{username}</strong>
          <span>{nickname}</span>
        </Info>
      </div>
      <FollowButton outlined>Seguir</FollowButton>
    </Container>
  );
};

export default FollowSuggestion;
