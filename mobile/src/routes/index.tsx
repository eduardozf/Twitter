import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Feather';
import Login from '../pages/Login';
import Main from '../pages/Main';
import NewTweet from '../pages/NewTweet';

import LogoImg from '../assets/logo.png';

const NavRoutes = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavRoutes.Navigator>
      <NavRoutes.Screen
        name="Login"
        component={Login}
        options={{
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#1DA1F2',
          },
          headerBackAccessibilityLabel: 'aaa',
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
              <Icon name="menu" size={26} color="#1DA1F2" />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <Image source={LogoImg} style={{ width: 30, height: 25 }} />
          ),
          headerRight: () => (
            <TouchableOpacity style={{ marginRight: 15 }}>
              <Icon name="sliders" size={22} color="#1DA1F2" />
            </TouchableOpacity>
          ),
        }}
      />

      <NavRoutes.Screen
        name="NewTweet"
        component={NewTweet}
        options={{
          headerShown: false,
        }}
      />
    </NavRoutes.Navigator>
  );
};

export default Routes;
