import React, { useState } from 'react';

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
        <p>{'Lorem ipsum dolor sit amet'.repeat(90)}</p>
      </Body>
    </Container>
  );
};

export default Sidebar;
