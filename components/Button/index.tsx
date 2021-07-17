import React, { FC } from 'react';
import styled, { css } from 'styled-components/native';
import { GestureResponderEvent } from 'react-native';
import * as styles from './styles';

type StylePropTypes = typeof styles;

export interface ButtonPropsEntity {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  onPress?: (event: GestureResponderEvent) => void;
  variant?: 'primary' | 'secondary' | 'outlined';
}

const ButtonBase = styled.TouchableOpacity<ButtonPropsEntity>`
  ${styles.base}
  ${props => styles[props.variant as keyof StylePropTypes]}
`;

const ButtonText = styled.Text<Partial<ButtonPropsEntity>>`
  color: ${props => props.theme.text.white};
  font-size: 18px;
  font-family: Poppins-Regular;
`;

const Button: FC<ButtonPropsEntity> = props => {
  const { onPress, variant, size, children } = props;

  return (
    <ButtonBase
      onPress={onPress}
      variant={variant}
      size={size}
      activeOpacity={0.8}>
      <ButtonText variant={variant} size={size}>
        {children}
      </ButtonText>
    </ButtonBase>
  );
};

Button.defaultProps = {
  variant: 'primary',
};

export default Button;
