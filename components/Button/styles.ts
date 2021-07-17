import { css } from 'styled-components/native';

export const base = css`
  width: 100%;
  padding: 14px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

export const primary = css`
  background-color: ${props => props.theme.background.blue};
`;
