import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationScreens } from './navigation.handler';
import HomeScreen from '../screens/Home';
import AccountScreen from '../screens/Account';
import MessagesScreen from '../screens/Messages';
import CartScreen from '../screens/Cart';

interface TabPropsEntity {}

const HomeTab = createBottomTabNavigator();

export const HomeTabNavigation: FC<TabPropsEntity> = () => {
  return (
    <HomeTab.Navigator>
      <HomeTab.Screen name={NavigationScreens.Home} component={HomeScreen} />
      <HomeTab.Screen
        name={NavigationScreens.Account}
        component={AccountScreen}
      />
      <HomeTab.Screen
        name={NavigationScreens.Messages}
        component={MessagesScreen}
      />
      <HomeTab.Screen name={NavigationScreens.Cart} component={CartScreen} />
    </HomeTab.Navigator>
  );
};

const AccountTab = createBottomTabNavigator();

export const AccountTabNavigation: FC<TabPropsEntity> = () => {
  return (
    <AccountTab.Navigator>
      <AccountTab.Screen name={NavigationScreens.Home} component={HomeScreen} />
      <AccountTab.Screen
        name={NavigationScreens.Messages}
        component={MessagesScreen}
      />
      <AccountTab.Screen name={NavigationScreens.Cart} component={CartScreen} />
    </AccountTab.Navigator>
  );
};
