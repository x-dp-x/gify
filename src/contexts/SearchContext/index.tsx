import React, { ReactNode, useState } from 'react';
import { SearchResult } from '../../types/searchResult';

interface SearchContext {
  searchResults: SearchResult[] | [];
  setSearchResults(value: SearchResult[] | []): void;
}

export const SearchContext = React.createContext<SearchContext>({
  searchResults: [],
  setSearchResults: () => {},
});

interface SearchProviderProps {
  children: ReactNode;
}

export const SearchProvider = ({ children }: SearchProviderProps) => {
  const [searchResults, setSearchResults] = useState<SearchResult[] | []>([]);

  return (
    <SearchContext.Provider
      value={{
        searchResults,
        setSearchResults,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
