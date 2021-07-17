import React, { FC } from 'react';
import { GestureResponderEvent } from 'react-native';
import { ButtonBase, ButtonLabel } from './styles';

export interface ButtonPropsEntity {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  onPress?: (event: GestureResponderEvent) => void;
  variant?: 'primary' | 'secondary' | 'outlined';
  fullwidth?: boolean;
}

const Button: FC<ButtonPropsEntity> = props => {
  const { onPress, variant, size, children, fullwidth } = props;

  return (
    <ButtonBase
      onPress={onPress}
      variant={variant}
      size={size}
      fullwidth={fullwidth}
      activeOpacity={0.8}>
      <ButtonLabel variant={variant} size={size}>
        {children}
      </ButtonLabel>
    </ButtonBase>
  );
};

Button.defaultProps = {
  variant: 'primary',
  size: 'sm',
  fullwidth: true,
};

export default Button;
