import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constants';
import { textSizes } from '../../constants';

const defaultTextSize = textSizes.small;

interface TextElementProps {
  fontSize: number;
  lineHeight: number;
  color: string;
}

const TextElement = styled.span`
  ${({ fontSize }: TextElementProps) =>
    fontSize ? `font-size: ${fontSize}px` : ''};
  ${({ lineHeight }: TextElementProps) =>
    lineHeight ? `line-height: ${lineHeight}px` : ''};
  color: ${({ color }) => (color ? colors[color] : colors.black)};
`;

export interface TextProps {
  color?: string;
  size?: string;
  children: string;
}

export const Text = ({ color, size, children }: TextProps) => {
  const textSize = (size && textSizes[size]) || defaultTextSize;
  return (
    <TextElement
      color={color || 'black'}
      fontSize={textSize.fs}
      lineHeight={textSize.lh}
    >
      {children}
    </TextElement>
  );
};
