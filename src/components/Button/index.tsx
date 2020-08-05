import styled from 'styled-components';
import { colors, textSizes } from '../../constants';

export const Button = styled.button`
  cursor: pointer;
  font-family: monospace;
  color: ${colors.white};
  border-radius: 5px;
  border: 0;
  background: ${({ disabled }) => (disabled ? colors.grey : colors.blue)};
  padding: 10px 15px;
  margin: 0 20px 20px;
  font-size: ${textSizes.large.fs}px;
  line-height: ${textSizes.large.lh}px;
  box-shadow: 3px 5px ${colors.black};
  transition: background 0.3s ease;
  height: 52px;

  :hover {
    background: ${colors.darkBlue};
  }

  :active {
    background: ${colors.black};
    color: ${colors.darkBlue};
  }
`;
