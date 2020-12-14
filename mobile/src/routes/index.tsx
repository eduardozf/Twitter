import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';
import Main from '../pages/Main';

import LogoImg from '../assets/logo.png';
import MenuImg from '../assets/menu.png';
import StarsImg from '../assets/starts.png';

const NavRoutes = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavRoutes.Navigator initialRouteName="Main">
      <NavRoutes.Screen
        name="Login"
        component={Login}
        options={{
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#1DA1F2',
          },
        }}
      />

      <NavRoutes.Screen
        name="Main"
        component={Main}
        options={{
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerStyle: {
            borderBottomWidth: 0.5,
            borderBottomColor: '#aaa',
          },
          headerLeft: () => (
            <TouchableOpacity style={{ marginLeft: 15 }}>
              <Image source={MenuImg} style={{ width: 20, height: 16 }} />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <Image source={LogoImg} style={{ width: 30, height: 25 }} />
          ),
          headerRight: () => (
            <TouchableOpacity style={{ marginRight: 15 }}>
              <Image source={StarsImg} style={{ width: 28, height: 28 }} />
            </TouchableOpacity>
          ),
        }}
      />
    </NavRoutes.Navigator>
  );
};

export default Routes;
