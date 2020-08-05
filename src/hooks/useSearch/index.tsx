import { useContext } from 'react';
import { SearchContext } from '../../contexts/SearchContext';

export const useSearch = () => {
  const { searchResults, setSearchResults } = useContext(SearchContext);

  return {
    searchResults,
    setSearchResults,
    clearSearchResults: () => [],
  };
};
