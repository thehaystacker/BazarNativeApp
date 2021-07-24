import styled from 'styled-components/native';
import { GridContainer } from '../../components';

export const PageWrapper = styled(GridContainer)`
  flex: 1;
  background-color: ${props => props.theme.background.white};
`;

export const TakeALookImg = styled.Image`
  width: 100%;
`;

export const ButtonWrapper = styled.View`
  flex-direction: column;
  width: 100%;
`;

export const SignInButtonWrapper = styled.View`
  margin-top: 15px;
`;
