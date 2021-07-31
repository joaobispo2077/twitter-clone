import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
        {/* src="http://github.com/joaobispo2077.png" */}
      </Banner>
      <ProfileData>
        {/* <EditButton outlined>Editar perfil</EditButton> */}

        <h1>João Bispo</h1>
        <h2>@joaobispo2077</h2>

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
    </Container>
  );
};

export default ProfilePage;
