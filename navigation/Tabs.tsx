import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationScreens } from './navigation.handler';
import HomeScreen from '../screens/Home';
import AccountScreen from '../screens/Account';
import MessagesScreen from '../screens/Messages';
import CartScreen from '../screens/Cart';

interface TabNavigationEntity {}

const { Navigator, Screen } = createBottomTabNavigator();

const TabNavigation: FC<TabNavigationEntity> = () => {
  return (
    <Navigator>
      <Screen name={NavigationScreens.Home} component={HomeScreen} />
      <Screen name={NavigationScreens.Messages} component={MessagesScreen} />
      <Screen name={NavigationScreens.Cart} component={CartScreen} />
      <Screen name={NavigationScreens.Account} component={AccountScreen} />
    </Navigator>
  );
};

export default TabNavigation;
