import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationScreens } from './navigation.handler';
import { HomeTabNavigation, AccountTabNavigation } from './Tabs';
import Signup from '../screens/Signup';

const StackNavigation = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <NavigationContainer>
      <Navigator>
        <Screen name={NavigationScreens.Home} component={HomeTabNavigation} />
        <Screen
          name={NavigationScreens.Account}
          component={AccountTabNavigation}
        />
        <Screen name={NavigationScreens.SignUp} component={Signup} />
      </Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
