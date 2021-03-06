import React, { useState } from 'react';
import StickyBox from 'react-sticky-box';

import FollowSuggestion from '../FollowSuggestion';
import List from '../List';
import News from '../News';
import {
  Container,
  SearchBar,
  SearchWrapper,
  SearchIcon,
  SearchInput,
  Body,
} from './styles';

const Sidebar: React.FC = () => {
  const [activeInput, setActiveInput] = useState(false);

  const handleToggleActiveInput = () => {
    setActiveInput((previousActiveInput) => !previousActiveInput);
  };

  return (
    <Container>
      <SearchWrapper>
        <SearchBar className={activeInput ? 'active' : ''}>
          <SearchIcon className={activeInput ? 'active' : ''} />
          <SearchInput
            onFocus={handleToggleActiveInput}
            onBlur={handleToggleActiveInput}
            placeholder="Buscar no Twitter"
          />
        </SearchBar>
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="Talvez vocรช conheรงa"
            elements={[
              <FollowSuggestion
                key="1"
                nickname="@BrenBaka"
                username="๐๐ฟ๐ฒ๐ป๐ฑ๐ฎ ๐"
                avatar="https://pbs.twimg.com/profile_images/1422600412071346177/dVXERJaj_400x400.jpg"
              />,
              <FollowSuggestion
                key="2"
                nickname="@BrenBaka"
                username="๐๐ฟ๐ฒ๐ป๐ฑ๐ฎ ๐"
                avatar="https://pbs.twimg.com/profile_images/1422600412071346177/dVXERJaj_400x400.jpg"
              />,
              <FollowSuggestion
                key="3"
                nickname="@BrenBaka"
                username="๐๐ฟ๐ฒ๐ป๐ฑ๐ฎ ๐"
                avatar="https://pbs.twimg.com/profile_images/1422600412071346177/dVXERJaj_400x400.jpg"
              />,
            ]}
          />

          <List
            title="O que estรก acontecendo"
            elements={[
              <News
                key="1"
                range="Assunto do Momento em Brasil"
                headline="O que รฉ cringe?"
              />,
              <News
                key="2"
                range="Futebol"
                headline="Presidente do Barรงa: Messi queria ficar, mas 'clube estรก acima atรฉ do melhor do mundo'"
                image="https://pbs.twimg.com/semantic_core_img/1423343388405891074/CY7aSu7a?format=jpg&name=900x900"
              />,
              <News
                key="3"
                range="Anime"
                headline="Capรญtulo comemorativo de โBleachโ revela gancho para novo arco"
                image="https://ovicio.com.br/wp-content/uploads/2021/08/20210806-ovicio-bleach-new-730x365.jpg"
              />,
              <News
                key="4"
                range="Assunto do Momento em Sรฃo Paulo"
                headline="Jovens relatam avistamento de ovnis"
              />,
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default Sidebar;
