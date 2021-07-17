import React, { FC } from 'react';
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams,
} from 'react-navigation';
import Button from '../../components/Button';
import { VerticalSection } from '../../components';
import { PageWrapper, TakeALookImg, ButtonWrapper } from './styled';

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
        <ButtonWrapper>
          <Button>Take a look</Button>
          <Button variant="outlined">Sign In</Button>
        </ButtonWrapper>
      </VerticalSection>
    </PageWrapper>
  );
};

export default TakeALook;
