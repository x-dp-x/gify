import React from 'react';
import { render } from '@testing-library/react';
import { SearchResults } from './';

const firstImage = {
  title: 'one',
  id: '1',
  images: {
    fixed_width: {
      url: './one.gif',
      width: '200',
      height: '250',
    },
  },
};
const secondImage = {
  title: 'two',
  id: '2',
  images: {
    fixed_width: {
      url: './two.gif',
      width: '200',
      height: '400',
    },
  },
};
const defaultProps = {
  searchResults: [firstImage, secondImage],
};

test('should render a list of gifs with the correct image and size', () => {
  const { getByTestId } = render(<SearchResults {...defaultProps} />);
  const first = firstImage.images.fixed_width;
  expect(getByTestId('search-card-1').getAttribute('width')).toEqual(
    first.width,
  );
  expect(getByTestId('search-card-1').getAttribute('height')).toEqual(
    first.height,
  );
  expect(getByTestId('search-image-1').getAttribute('src')).toEqual(first.url);
  const second = secondImage.images.fixed_width;
  expect(getByTestId('search-card-2').getAttribute('width')).toEqual(
    second.width,
  );
  expect(getByTestId('search-card-2').getAttribute('height')).toEqual(
    second.height,
  );
  expect(getByTestId('search-image-2').getAttribute('src')).toEqual(second.url);
});
