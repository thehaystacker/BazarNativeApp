import React, { FC } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams,
} from 'react-navigation';

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const TakeALook: FC<Props> = props => {
  const { navigation } = props;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>TakeALook</Text>
    </View>
  );
};

export default TakeALook;
