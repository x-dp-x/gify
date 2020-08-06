import React from 'react';
import { SearchForm } from './SearchForm';
import { SearchResults } from './SearchResults';
import { useSearch } from '../../hooks/useSearch';

export const Search = () => {
  const { searchResults, setSearchResults, clearSearchResults } = useSearch();
  return (
    <>
      <SearchForm
        setSearchResults={setSearchResults}
        clearSearchResults={clearSearchResults}
      />
      {searchResults ? <SearchResults searchResults={searchResults} /> : null}
    </>
  );
};
