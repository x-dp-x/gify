import React, { ReactNode } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { useFavourites } from '../../hooks/useFavourites';
import { colors } from '../../constants';
import { Header } from '../Header';
import { Nav } from '../Nav';

export { Reset } from './reset';

export const Body = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    background: ${colors.background};
    font-family: monospace;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1040px;
  padding: 0 20px;
  margin: 0 auto;
`;

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { favourites } = useFavourites();
  return (
    <Wrapper>
      <Header />
      <Nav favourites={favourites} />
      {children}
    </Wrapper>
  );
};
