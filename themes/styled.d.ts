import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: {
      blue: string;
      grey: string;
      white: string;
    };
    text: {
      blue: string;
      black: string;
      grey: string;
      white: string;
    };
    icon: {
      blue: string;
      black: string;
      grey: string;
      white: string;
    };
  }
}
