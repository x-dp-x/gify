import React from 'react';
import { render } from '@testing-library/react';
import { colors, textSizes } from '../../constants';
import { Text } from './';

const copy = 'hello world';

test('should render a text element with a color', () => {
  const { getByText } = render(<Text color="blue">{copy}</Text>);
  expect(getByText(copy)).toHaveStyle(`color: ${colors.blue}`);
});

test('should render a black text element where no color is defined', () => {
  const { getByText } = render(<Text>{copy}</Text>);
  expect(getByText(copy)).toHaveStyle(`color: ${colors.black}`);
});

test('should render a small text element', () => {
  const { getByText } = render(<Text size="small">{copy}</Text>);
  const element = getByText(copy);
  expect(element).toHaveStyle(`font-size: ${textSizes.small.fs}px`);
  expect(element).toHaveStyle(`line-height: ${textSizes.small.lh}px`);
});

test('should render a medium text element', () => {
  const { getByText } = render(<Text size="medium">{copy}</Text>);
  const element = getByText(copy);
  expect(element).toHaveStyle(`font-size: ${textSizes.medium.fs}px`);
  expect(element).toHaveStyle(`line-height: ${textSizes.medium.lh}px`);
});

test('should render a large text element', () => {
  const { getByText } = render(<Text size="large">{copy}</Text>);
  const element = getByText(copy);
  expect(element).toHaveStyle(`font-size: ${textSizes.large.fs}px`);
  expect(element).toHaveStyle(`line-height: ${textSizes.large.lh}px`);
});

test('should render a small text element where no size is defined', () => {
  const { getByText } = render(<Text>{copy}</Text>);
  const element = getByText(copy);
  expect(element).toHaveStyle(`font-size: ${textSizes.small.fs}px`);
  expect(element).toHaveStyle(`line-height: ${textSizes.small.lh}px`);
});

test('should render children', () => {
  const { getByText } = render(<Text>{copy}</Text>);
  expect(getByText(copy)).toBeInTheDocument();
});
