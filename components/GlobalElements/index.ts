import styled from 'styled-components/native';
import { View } from 'react-native';

export const PageContainer = styled.View`
  padding: 0 20px;
`;

export const ButtonWrapper = styled.TouchableOpacity<{ variant?: string }>`
  background-color: ${props => props.theme.background.blue};
  width: 100%;
  padding: 14px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  ${props =>
    props.variant === 'hollow' &&
    `
      background-color: transparent;
  `}
`;

export const ButtonLabel = styled.Text<{ variant?: string }>`
  color: ${props => props.theme.text.white};
  font-size: 18px;
  font-family: Poppins-Regular;
  ${props =>
    props.variant === 'hollow' &&
    `
    color: ${props.theme.text.blue};
  `}
`;

export const VerticalSection = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
