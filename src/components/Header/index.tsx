import React from 'react';
import styled from 'styled-components';
import { Text } from '../Text';

const Wrapper = styled.header`
  padding: 20px 0;
`;

export const Header = () => (
  <Wrapper>
    <Text color="white" size="large">
      Gify
    </Text>
  </Wrapper>
);
