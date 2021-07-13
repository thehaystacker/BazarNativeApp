import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { themes } from './config';

interface Props {}

const Theme: FC<Props> = props => {
  const { children } = props;

  return <ThemeProvider theme={themes.light}>{children}</ThemeProvider>;
};

export default Theme;
