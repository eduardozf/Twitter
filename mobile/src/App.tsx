import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthContext from './context/AuthContext';

import Routes from './routes';

const src: React.FC = () => {
  return (
    <AuthContext>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </AuthContext>
  );
};

export default src;
