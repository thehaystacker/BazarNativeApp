import styled from 'styled-components/native';
import { GridContainer } from '../../components';

export const ScreenWrapper = styled.View`
  flex: 1;
  background-color: ${props => props.theme.background.blue};
`;

export const PageWrapper = styled.View`
  display: flex;
  flex-direction: column;
`;

export const LogoWrapper = styled(GridContainer)`
  align-items: center;
`;
