import React from 'react';
import { render } from '@testing-library/react';
import { Link } from './';

const copy = 'hello world';

test('should render a link with an anchor', () => {
  const { getByRole } = render(<Link href="/xyz">{copy}</Link>);
  expect(getByRole('link')).toHaveAttribute('href', '/xyz');
});

test('should render children', () => {
  const { getByText } = render(<Link href="/xyz">{copy}</Link>);
  expect(getByText(copy)).toBeInTheDocument();
});
