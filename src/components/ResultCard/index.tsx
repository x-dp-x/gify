import styled from 'styled-components';
import { colors } from '../../constants';
import { media } from '../../utils';

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px 0 80px 0;
`;

interface ResultCardProps {
  width: string;
  height: string;
}

export const ResultCard = styled.a`
  position: relative;
  display: inline-block;
  padding: 5px;
  border-radius: 5px;
  margin: 20px 0;
  background: ${colors.black};
  width: ${({ width }: ResultCardProps) => `${width}px` || '200px'};
  min-height: ${({ height }: ResultCardProps) => `${height}px` || '200px'};

  ${media.tablet`
    margin: 10px;
  `}
`;

export const ResultCardImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;
