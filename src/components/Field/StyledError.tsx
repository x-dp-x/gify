import styled from 'styled-components';
import { colors, textSizes } from '../../constants';
import { media } from '../../utils';

export const StyledError = styled.p`
  display: block;
  font-size: ${textSizes.small.fs}px;
  color: ${colors.red};
  text-decoration: underline;
  position: absolute;
  top: -25px;
  right: 10px;

  ${media.tablet`
    top: unset;
    bottom: -5px;
  `}
`;
