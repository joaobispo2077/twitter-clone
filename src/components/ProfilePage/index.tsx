import React from 'react';

import Feed from '../Feed';
import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
        {/* src="http://github.com/joaobispo2077.png" */}
      </Banner>
      <ProfileData>
        <h1>João Bispo</h1>
        <h2>@joaobispo2077</h2>
        <EditButton outlined>Editar perfil</EditButton>

        <p>
          don&apos;t tread on me 🐍 - refrão de música animada. frase triste.
          bolo de chocolate. shitposting. sci-fi.
          <a href="https://github.com/joaobispo2077">
            https://github.com/joaobispo2077
          </a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 10 de agosto de 2000
          </li>
        </ul>

        <Followage>
          <span>
            <strong>76 </strong> Seguindo
          </span>
          <span>
            <strong>42 </strong> Seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
