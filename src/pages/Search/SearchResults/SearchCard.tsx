import styled from 'styled-components';
import { colors } from '../../../constants';
import { media } from '../../../utils';

export const SearchCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px 0 80px 0;
`;

interface SearchCardProps {
  width: string;
  height: string;
}

export const SearchCard = styled.a`
  display: inline-block;
  padding: 5px;
  border-radius: 5px;
  margin: 20px 0;
  background: ${colors.black};
  width: ${({ width }: SearchCardProps) => `${width}px` || '200px'};
  min-height: ${({ height }: SearchCardProps) => `${height}px` || '200px'};

  ${media.tablet`
    margin: 10px;
  `}
`;

export const SearchCardImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;
