import React, { FC } from 'react';
import { Text, View } from 'react-native';
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams,
} from 'react-navigation';
import Label from '../../components/Label';
import { GridContainer, FormGroup, InputText } from '../../components';
import { ScreenWrapper, PageWrapper, LogoWrapper } from './styled';
import { useState } from 'react';

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const SignIn: FC<Props> = props => {
  const { navigation } = props;

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <ScreenWrapper>
      <GridContainer horizontalSpacing={4} verticalSpacing={2}>
        <PageWrapper>
          <LogoWrapper verticalSpacing={5}>
            <Label type="h2" variant="secondary" weight="bold">
              bazaar
            </Label>
          </LogoWrapper>
          <GridContainer verticalSpacing={3}>
            <Label type="h4" variant="secondary">
              Sign In
            </Label>
          </GridContainer>
          <FormGroup>
            <InputText value={email} onChange={() => {}}></InputText>
            <InputText value={password} onChange={() => {}}></InputText>
          </FormGroup>
        </PageWrapper>
      </GridContainer>
    </ScreenWrapper>
  );
};

export default SignIn;
