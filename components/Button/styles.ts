import styled, { css } from 'styled-components/native';
import { ButtonPropsEntity } from './index';

const baseStyles = {
  base: css`
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: 1px solid transparent;
    align-self: flex-start;
  `,
  primary: css`
    background-color: ${props => props.theme.background.blue};
    border-color: ${props => props.theme.background.blue};
  `,
  secondary: css`
    background-color: transparent;
  `,
  outlined: css`
    background-color: transparent;
    border-color: ${props => props.theme.background.blue};
  `,
  xs: css`
    padding: 8px 12px;
  `,
  sm: css`
    padding: 12px 16px;
  `,
  md: css`
    padding: 14px 18px;
  `,
  lg: css`
    padding: 16px 20px;
  `,
  fullwidth: css`
    width: 100%;
  `,
};

const labelStyles = {
  base: css`
    font-size: 14px;
    font-family: Poppins-Regular;
  `,
  primary: css`
    color: ${props => props.theme.text.white};
  `,
  secondary: css`
    color: ${props => props.theme.text.blue};
  `,
  outlined: css`
    color: ${props => props.theme.text.blue};
  `,
  xs: css`
    font-size: 12px;
  `,
  sm: css`
    font-size: 14px;
  `,
  md: css`
    font-size: 16px;
  `,
  lg: css`
    font-size: 18px;
  `,
};

export const ButtonBase = styled.TouchableOpacity<ButtonPropsEntity>`
  ${baseStyles.base}
  ${props => baseStyles[props.variant as keyof typeof baseStyles]}
  ${props => baseStyles[props.size as keyof typeof baseStyles]}
  ${props => (props.fullwidth ? baseStyles.fullwidth : null)}
`;

export const ButtonLabel = styled.Text<ButtonPropsEntity>`
  ${labelStyles.base}
  ${props => labelStyles[props.variant as keyof typeof labelStyles]}
  ${props => labelStyles[props.size as keyof typeof labelStyles]}
`;
