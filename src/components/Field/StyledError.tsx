import styled from 'styled-components';
import { colors, textSizes } from '../../constants';

export const StyledError = styled.p`
  display: block;
  font-size: ${textSizes.small.fs}px;
  color: ${colors.red};
  text-decoration: underline;
  position: absolute;
  top: -25px;
  right: 10px;
`;
