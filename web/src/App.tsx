import React from 'react';
import Routes from './routes/'

import AuthContext from './context/AuthContext'
import GlobalStyles from './styles/GlobalSyles';

const App: React.FC = () => {
  return (
    <AuthContext>
      <GlobalStyles />
      <Routes />
    </AuthContext>
  );
}

export default App;
