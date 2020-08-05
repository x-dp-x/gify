import styled from 'styled-components';
import { colors, textSizes } from '../../constants';
import { media } from '../../utils';

export const StyledField = styled.input`
  width: 100%;
  font-family: monospace;
  border: none;
  color: ${colors.black};
  border-radius: 5px;
  background: ${colors.white};
  padding: 10px 15px;
  margin: 0 0 20px 0;
  font-size: ${textSizes.large.fs}px;
  line-height: ${textSizes.large.lh}px;
  box-shadow: 3px 5px ${colors.black};

  ${media.tablet`
    width: 350px;
  `}

  ::placeholder {
    transition: color 0.3s ease;
    color: ${colors.blue};
  }

  :hover {
    ::placeholder {
      color: ${colors.darkBlue};
    }
  }

  :focus {
    background: ${colors.black};
    color: ${colors.white};
  }
`;
