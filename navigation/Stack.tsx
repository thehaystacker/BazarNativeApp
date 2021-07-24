import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationScreens, stackNavigatorOptions } from './navigation.handler';
import TabNavigation from './Tabs';
import Signup from '../screens/Signup';
import SignIn from '../screens/SignIn';
import Notifications from '../screens/Notifications';
import TakeALook from '../screens/TakeALook';

const StackNavigation = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <NavigationContainer>
      <Navigator
        screenOptions={stackNavigatorOptions}
        initialRouteName={NavigationScreens.SignIn}>
        <Screen name={NavigationScreens.Home} component={TabNavigation} />
        <Screen name={NavigationScreens.TakeALook} component={TakeALook} />
        <Screen name={NavigationScreens.SignIn} component={SignIn} />
        <Screen name={NavigationScreens.SignUp} component={Signup} />
        <Screen
          name={NavigationScreens.Notifications}
          component={Notifications}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
