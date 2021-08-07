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
      <div />
    </Container>
  );
};

export default MenuBar;
