import React, { useState } from 'react';

import FollowSuggestion from '../FollowSuggestion';
import List from '../List';
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
      <Body>
        <List
          title="Talvez você conheça"
          elements={[
            <FollowSuggestion
              key="1"
              nickname="@BrenBaka"
              username="𝗕𝗿𝗲𝗻𝗱𝗮 🌟"
              avatar="https://pbs.twimg.com/profile_images/1422600412071346177/dVXERJaj_400x400.jpg"
            />,
            <FollowSuggestion
              key="2"
              nickname="@BrenBaka"
              username="𝗕𝗿𝗲𝗻𝗱𝗮 🌟"
              avatar="https://pbs.twimg.com/profile_images/1422600412071346177/dVXERJaj_400x400.jpg"
            />,
            <FollowSuggestion
              key="3"
              nickname="@BrenBaka"
              username="𝗕𝗿𝗲𝗻𝗱𝗮 🌟"
              avatar="https://pbs.twimg.com/profile_images/1422600412071346177/dVXERJaj_400x400.jpg"
            />,
          ]}
        />

        <List
          title="Talvez você conheça"
          elements={[
            <h1 key="1">Teste</h1>,
            <h1 key="2">Teste</h1>,
            <h1 key="3">Teste</h1>,
          ]}
        />
      </Body>
    </Container>
  );
};

export default Sidebar;
