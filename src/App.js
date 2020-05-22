import React, { useState } from 'react';
import image from './images/expand-vertical-4.svg';
import { AppContainer } from './App.styles';
import { Collapsible } from './components';

function App() {
  const [state, setState] = useState(true);
  return (
    <AppContainer>
      <header>
        <img src={image} alt="React 101" />
        <h1 onClick={() => setState(!state)}>Collapsible</h1>
      </header>
      {
        state && <Collapsible />
      }
    </AppContainer>
  );
}

export default App;
