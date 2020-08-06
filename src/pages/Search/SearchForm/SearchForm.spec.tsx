import React from 'react';
import { render } from '@testing-library/react';
import { waitFor } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import * as utils from '../../../utils';
import { SearchForm, API_ENDPOINT } from './';

jest.mock('../../../utils', () => ({
  ...jest.requireActual('../../../utils'),
  fetch: jest
    .fn()
    .mockImplementation(() => Promise.resolve({ data: { x: 'y' } })),
}));

// TODO: Add tests for validation

const defaultProps = {
  setSearchResults: jest.fn(),
  clearSearchResults: jest.fn(),
};

test('should render an input and button', () => {
  const { getByPlaceholderText, getByRole } = render(
    <SearchForm {...defaultProps} />,
  );
  expect(getByPlaceholderText('What you looking for?')).toBeInTheDocument();
  expect(getByRole('button', { name: 'Find GIF!' })).toBeInTheDocument();
});

test('should make a request to fetch data, then store it', async () => {
  const { getByPlaceholderText, getByRole } = render(
    <SearchForm {...defaultProps} />,
  );
  const input = getByPlaceholderText('What you looking for?');
  const button = getByRole('button', { name: 'Find GIF!' });
  const inputText = 'dogs';
  userEvent.type(input, inputText);
  userEvent.click(button);
  const request = `${API_ENDPOINT}&q=${inputText}&limit=12&offset=0`;
  await waitFor(() => {
    expect(defaultProps.clearSearchResults).toHaveBeenCalled();
    expect(utils.fetch).toHaveBeenLastCalledWith(request);
    expect(defaultProps.setSearchResults).toHaveBeenCalledWith({ x: 'y' });
  });
});
