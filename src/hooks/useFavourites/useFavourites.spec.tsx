import React from 'react';
import { render } from '@testing-library/react';
import { waitFor } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { FavouritesProvider } from '../../contexts/FavouritesContext';
import { useFavourites } from './';

const first = {
  title: 'first',
  id: 'first-1',
  images: {
    fixed_width: {
      url: './first.gif',
      width: '200',
      height: '250',
    },
  },
};

const second = [
  {
    title: 'second',
    id: 'second-1',
    images: {
      fixed_width: {
        url: './second.gif',
        width: '200',
        height: '250',
      },
    },
  },
];

const DummyComponent = () => {
  const { favourites = [], setFavourites, addToFavourites } = useFavourites();
  return (
    <div>
      <button onClick={() => addToFavourites(first)}>add favourite</button>
      <button onClick={() => setFavourites(second)}>set favourite</button>
      {favourites.map((item) => item.title)}
    </div>
  );
};

test('should not render any favourites', () => {
  const { queryByText } = render(
    <FavouritesProvider>
      <DummyComponent />
    </FavouritesProvider>,
  );

  expect(queryByText(first.title)).not.toBeInTheDocument();
  expect(queryByText(second[0].title)).not.toBeInTheDocument();
});

test('should add a favourite', async () => {
  const { queryByText, getByRole, getByText } = render(
    <FavouritesProvider>
      <DummyComponent />
    </FavouritesProvider>,
  );
  userEvent.click(getByRole('button', { name: 'add favourite' }));

  await waitFor(() => {
    expect(getByText(first.title)).toBeInTheDocument();
    expect(queryByText(second[0].title)).not.toBeInTheDocument();
  });
});

test('should overwrite the favourites', async () => {
  const { queryByText, getByRole, getByText } = render(
    <FavouritesProvider>
      <DummyComponent />
    </FavouritesProvider>,
  );
  userEvent.click(getByRole('button', { name: 'set favourite' }));

  await waitFor(() => {
    expect(queryByText(first.title)).not.toBeInTheDocument();
    expect(getByText(second[0].title)).toBeInTheDocument();
  });
});

test('should add to the existing favourites', async () => {
  const { getByRole, getByText } = render(
    <FavouritesProvider>
      <DummyComponent />
    </FavouritesProvider>,
  );
  userEvent.click(getByRole('button', { name: 'set favourite' }));
  userEvent.click(getByRole('button', { name: 'add favourite' }));

  await waitFor(() => {
    expect(getByText(`${second[0].title}${first.title}`)).toBeInTheDocument();
  });
});
