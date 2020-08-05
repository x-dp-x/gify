import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Nav } from './';
import { colors } from '../../constants';

test('should render the nav with two items', () => {
  const { getAllByRole } = render(<Nav />);
  expect(getAllByRole('link')).toHaveLength(2);
});

test('should render search as active', () => {
  const { getByTestId } = render(<Nav />);
  expect(getByTestId('search-link')).toHaveStyle(
    `border-bottom: 2px solid ${colors.blue}`,
  );
});
