import styled from 'styled-components/native';
import { View } from 'react-native';

export const PageContainer = styled.View`
  padding: 0 20px;
`;

export const VerticalSection = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TextH1 = styled.Text<{ primary: boolean }>`
  font-family: Poppins-Bold;
  font-size: 48px;
  letter-spacing: 2px;
  color: ${props => props.theme.text.white}
    ${props =>
      props.primary &&
      `
    color: ${props.theme.text.blue}
  `};
`;
