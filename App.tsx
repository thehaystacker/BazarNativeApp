import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationScreens} from './config/navigation';
import Welcome from './screens/Welcome';
import Signup from './screens/Signup';

const App = () => {
  const {Navigator, Screen} = createStackNavigator();

  return (
    <NavigationContainer>
      <Navigator>
        <Screen name={NavigationScreens.Welcome} component={Welcome} />
        <Screen name={NavigationScreens.SignUp} component={Signup} />
      </Navigator>
    </NavigationContainer>
  );
};

export default App;
