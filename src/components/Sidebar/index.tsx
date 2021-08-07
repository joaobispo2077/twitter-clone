import React, { useState } from 'react';

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
            <h1 key="1">Teste</h1>,
            <h1 key="2">Teste</h1>,
            <h1 key="3">Teste</h1>,
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
