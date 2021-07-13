import React, { FC } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams,
} from 'react-navigation';
import { NavigationScreens } from '../../navigation/navigation.handler';

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const Messages: FC<Props> = props => {
  const { navigation } = props;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Messages</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate(NavigationScreens.SignUp)}>
        <Text>Signup</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate(NavigationScreens.Notifications)}>
        <Text>Notifications</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Messages;
