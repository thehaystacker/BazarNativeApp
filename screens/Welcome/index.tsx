import React, {FC} from 'react';
import {Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams,
} from 'react-navigation';
import {NavigationScreens} from '../../config/navigation';

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const Welcome: FC<Props> = props => {
  const {navigation} = props;

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Welcome</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate(NavigationScreens.SignUp)}>
        <Text>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;
