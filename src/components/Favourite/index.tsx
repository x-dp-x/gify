import React from 'react';
import styled from 'styled-components';
import { colors, textSizes } from '../../constants';

const FavouriteButton = styled.button`
  position: absolute;
  top: 0px;
  right: 0px;
  cursor: pointer;
  font-family: monospace;
  color: ${colors.white};
  border-radius: 20px;
  border: 2px solid ${colors.blue};
  background: ${colors.black};
  padding: 2px 5px;
  margin: 10px;
  font-size: ${textSizes.small.fs}px;
  line-height: ${textSizes.small.lh}px;
  text-transform: uppercase;
  transition: background 0.3s ease;

  :hover {
    background: ${colors.darkBlue};
  }

  :active {
    background: ${colors.white};
    color: ${colors.darkBlue};
  }
`;

interface Favourite {
  onClick(): void;
}

export const Favourite = ({ onClick }: Favourite) => (
  <FavouriteButton onClick={onClick}>Save</FavouriteButton>
);
