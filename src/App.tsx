import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from './components/main';
import { MainStyled } from './global.styled';

function App() {
  return (
    <div>
      <MainStyled />
      <BrowserRouter>
        <Route path="/" component={Home} />
      </BrowserRouter>
    </div>
  );
}

export default App;
