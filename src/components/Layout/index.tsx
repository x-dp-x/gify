import styled, { createGlobalStyle } from "styled-components";
import { colors } from '../../constants';

export { Reset } from './reset';

export const Body = createGlobalStyle`  
  body {
    background: ${colors.background};
    font-family: monospace;
  }
`;

export const Layout = styled.div`
  width: 100%;
  max-width: 1040px;
  padding: 0 20px;
  margin: 0 auto;
`;