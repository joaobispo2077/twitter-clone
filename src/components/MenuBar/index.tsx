import React from 'react';

import Button from '../Button';
import {
  Container,
  TopSide,
  Logo,
  MenuButtom,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  OptionsIcon,
  BotSide,
  Avatar,
  ProfileData,
} from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <TopSide>
        <Logo />
        <MenuButtom>
          <HomeIcon />
          <span>Página inicial</span>
        </MenuButtom>

        <MenuButtom>
          <BellIcon />
          <span>Notificações</span>
        </MenuButtom>

        <MenuButtom>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButtom>

        <MenuButtom>
          <FavoriteIcon />
          <span>Favoritados</span>
        </MenuButtom>

        <MenuButtom className="active">
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButtom>

        <Button>
          <span>Tweetar</span>
        </Button>
      </TopSide>
      <BotSide>
        <Avatar
          src="https://github.com/joaobispo2077.png"
          alt="Usuário joaobispo2077"
        />

        <ProfileData>
          <strong>João Bispo</strong>
          <span>@joaobispo2077</span>
        </ProfileData>

        <OptionsIcon />
      </BotSide>
    </Container>
  );
};

export default MenuBar;
