import React, { FC } from 'react';
import { TouchableOpacity, Text, GestureResponderEvent } from 'react-native';
import { ButtonWrapper, ButtonLabel } from '../GlobalElements';

interface ButtonEntity {
  label: string;
  onPress?: (event: GestureResponderEvent) => void;
  variant?: 'filled' | 'hollow';
}

const Button: FC<ButtonEntity> = props => {
  const { label, onPress, variant } = props;

  return (
    <ButtonWrapper onPress={onPress} variant={variant} activeOpacity={0.8}>
      <ButtonLabel variant={variant}>{label}</ButtonLabel>
    </ButtonWrapper>
  );
};

Button.defaultProps = {
  variant: 'filled',
};

export default Button;
