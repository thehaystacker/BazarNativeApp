import React, { Children, FC } from 'react';
import { View, Text } from 'react-native';
import LabelText from './styles';

export interface LabelPropsEntity {
  weight?: 'thin' | 'normal' | 'bold';
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  variant?: 'primary' | 'secondary' | 'black' | 'grey';
}

const Label: FC<LabelPropsEntity> = props => {
  const { children, ...rest } = props;

  return <LabelText {...rest}>{children}</LabelText>;
};

Label.defaultProps = {
  weight: 'normal',
  type: 'h4',
  variant: 'black',
};

export default Label;
