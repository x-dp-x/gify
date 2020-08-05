import React from 'react';
import styled from 'styled-components';
import { Link as WouterLink } from 'wouter';
import { Text, TextProps } from '../Text';

interface LinkProps extends TextProps {
  href: string;
  children: string;
}

const Anchor = styled.a`
  text-decoration: none;
`;

export const Link = ({ href, color, size, children }: LinkProps) => (
  <WouterLink to={href}>
    <Anchor>
      <Text color={color} size={size}>
        {children}
      </Text>
    </Anchor>
  </WouterLink>
);
