import React from 'react';
import image from './images/expand-vertical-4.svg';
import { AppContainer } from './App.styles';
import { Collapsible } from './components';

function App() {
  return (
    <AppContainer>
      <header>
        <img src={image} alt="React 101" />
        <h1>Collapsible</h1>
        <Collapsible />
      </header>
    </AppContainer>
  );
}

export default App;
