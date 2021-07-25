import styled from 'styled-components/native';
import { View } from 'react-native';

type GridContainerPropsEntity = {
  verticalSpacing?: number;
  horizontalSpacing?: number;
};
export const GridContainer = styled(View)<GridContainerPropsEntity>`
  padding-left: ${props =>
    props.horizontalSpacing
      ? props.theme.spacing * props.horizontalSpacing
      : 0}px;
  padding-right: ${props =>
    props.horizontalSpacing
      ? props.theme.spacing * props.horizontalSpacing
      : 0}px;
  padding-top: ${props =>
    props.verticalSpacing ? props.theme.spacing * props.verticalSpacing : 0}px;
  padding-bottom: ${props =>
    props.verticalSpacing ? props.theme.spacing * props.verticalSpacing : 0}px;
`;

export const VerticalSection = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormGroup = styled.View`
  margin: 10px 0;
`;

export const InputText = styled.TextInput`
  border: none;
  border-bottom: 1px solid ${props => props.theme.text.white};
`;
