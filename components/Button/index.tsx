import React, { FC } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components/native';

interface ButtonEntity {}

const ButtonWrapper = styled.TouchableOpacity`
  background-color: ${(props: any) => props.theme.background.blue};
  width: 100%;
  padding: 14px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const ButtonLabel = styled.Text`
  color: ${(props: any) => props.theme.text.white};
  font-size: 18px;
`;

const Button: FC<ButtonEntity> = props => {
  return (
    <ButtonWrapper>
      <ButtonLabel>Take a look</ButtonLabel>
    </ButtonWrapper>
  );
};

export default Button;
