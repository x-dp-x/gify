import React from 'react';
import { SearchForm } from './SearchForm';
import { SearchResults } from './SearchResults';
import { useSearch } from '../../hooks/useSearch';
import { useFavourites } from '../../hooks/useFavourites';

export const Search = () => {
  const { searchResults, setSearchResults, clearSearchResults } = useSearch();
  const { addToFavourites } = useFavourites();
  return (
    <>
      <SearchForm
        setSearchResults={setSearchResults}
        clearSearchResults={clearSearchResults}
      />
      {searchResults ? (
        <SearchResults
          searchResults={searchResults}
          addToFavourites={addToFavourites}
        />
      ) : null}
    </>
  );
};
