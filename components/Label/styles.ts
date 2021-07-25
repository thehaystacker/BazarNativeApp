import styled, { css } from 'styled-components/native';
import { LabelPropsEntity } from './index';

const styles = {
  h1: css`
    font-size: 44px;
  `,
  h2: css`
    font-size: 36px;
  `,
  h3: css`
    font-size: 28px;
  `,
  h4: css`
    font-size: 24px;
  `,
  h5: css`
    font-size: 12px;
  `,
  h6: css`
    font-size: 10px;
  `,
  p: css`
    font-size: 14px;
  `,
  thin: css`
    font-family: Poppins-Light;
  `,
  normal: css`
    font-family: Poppins-Regular;
  `,
  bold: css`
    font-family: Poppins-Bold;
  `,
  primary: css`
    color: ${props => props.theme.text.blue};
  `,
  secondary: css`
    color: ${props => props.theme.text.white};
  `,
  black: css`
    color: ${props => props.theme.text.black};
  `,
  grey: css`
    color: ${props => props.theme.text.grey};
  `,
};

export default styled.Text<LabelPropsEntity>`
  ${props => styles[props.type as keyof typeof styles]}
  ${props => styles[props.weight as keyof typeof styles]}
  ${props => styles[props.variant as keyof typeof styles]}
`;
