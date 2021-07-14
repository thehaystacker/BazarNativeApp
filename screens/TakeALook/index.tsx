import React, { FC } from 'react';
import { Image } from 'react-native';
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams,
} from 'react-navigation';
import Button from '../../components/Button';
import { VerticalSection } from '../../components/GlobalElements';
import { PageWrapper, TakeALookImg } from './styled';

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const TakeALook: FC<Props> = props => {
  const { navigation } = props;

  return (
    <PageWrapper>
      <VerticalSection>
        <TakeALookImg
          source={require('../../assets/images/take-a-look.png')}
          style={{ resizeMode: 'contain' }}
        />
        <Button label="Take a look"></Button>
        <Button label="Sign In" variant="hollow"></Button>
      </VerticalSection>
    </PageWrapper>
  );
};

export default TakeALook;
