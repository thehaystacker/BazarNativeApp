import React, { FC, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Button from '../components/Button';
import { light, dark } from './config';

interface Props {}

const Theme: FC<Props> = props => {
  const { children } = props;
  const [theme, setTheme] = useState(light);

  const _toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === light ? dark : light));
  };

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
