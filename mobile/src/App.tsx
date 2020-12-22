import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthContext from './context/AuthContext';
import TweetsContext from './context/TweetsContext';

import Routes from './routes';

const src: React.FC = () => {
  return (
    <TweetsContext>
      <AuthContext>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </AuthContext>
    </TweetsContext>
  );
};

export default src;
