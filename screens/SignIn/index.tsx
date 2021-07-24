import React, { FC } from 'react';
import { Text, View } from 'react-native';
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams,
} from 'react-navigation';
import Label from '../../components/Label';
import { GridContainer } from '../../components';
import { ScreenWrapper, PageWrapper, ScreenTitle } from './styled';

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const SignIn: FC<Props> = props => {
  const { navigation } = props;

  return (
    <ScreenWrapper>
      <GridContainer horizontalSpacing={4} verticalSpacing={2}>
        <PageWrapper>
          <ScreenTitle verticalSpacing={5}>
            <Label type="h2" variant="secondary">
              bazaar
            </Label>
          </ScreenTitle>
        </PageWrapper>
      </GridContainer>
    </ScreenWrapper>
  );
};

export default SignIn;
