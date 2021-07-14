import styled from 'styled-components/native';
import { PageContainer } from '../../components/GlobalElements';

export const PageWrapper = styled(PageContainer)`
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
