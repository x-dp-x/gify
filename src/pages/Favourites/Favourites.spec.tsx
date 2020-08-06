import React from 'react';
import { render } from '@testing-library/react';
import { Favourites } from './';

jest.mock('../../hooks/useFavourites', () => ({
  useFavourites: () => ({
    favourites: [
      {
        title: 'one',
        id: '1',
        images: {
          fixed_width: {
            url: './one.gif',
            width: '200',
            height: '250',
          },
        },
      },
    ],
  }),
}));

test('should render a list of gifs with the correct image and size', () => {
  const { getByTestId } = render(<Favourites />);
  expect(getByTestId('fav-card-1').getAttribute('width')).toEqual('200');
  expect(getByTestId('fav-card-1').getAttribute('height')).toEqual('250');
  expect(getByTestId('fav-image-1').getAttribute('src')).toEqual('./one.gif');
});
