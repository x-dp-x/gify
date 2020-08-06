import React from 'react';
import { render } from '@testing-library/react';
import { Nav } from './';
import { colors } from '../../constants';

const mockFavourite = {
  id: '1',
  title: 'one',
  images: {
    fixed_width: {
      url: './x.gif',
      width: '200',
      height: '200',
    },
  },
};

test('should render the nav with one item by default', () => {
  const { getAllByRole } = render(<Nav favourites={[]} />);
  expect(getAllByRole('link')).toHaveLength(1);
});

test('should render the nav with two items, when we have favourites', () => {
  const { getAllByRole } = render(<Nav favourites={[mockFavourite]} />);
  expect(getAllByRole('link')).toHaveLength(2);
});

test('should render search as active', () => {
  const { getByTestId } = render(<Nav favourites={[]} />);
  expect(getByTestId('search-link')).toHaveStyle(
    `border-bottom: 2px solid ${colors.blue}`,
  );
});
