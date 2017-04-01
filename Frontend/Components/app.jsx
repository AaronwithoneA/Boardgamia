import React from 'react';
import HeaderContainer from './header';

const App = ({ children }) => (
  <div>
    <header className="header">
      <Header />
    </header>
    { children }
  </div>
);

export default App;
