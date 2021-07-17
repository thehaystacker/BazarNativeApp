import 'styled-components';
import { light as DefaultTheme } from './config';
declare module 'styled-components' {
  type Theme = typeof DefaultTheme;
  export interface DefaultTheme extends Theme {}
}
