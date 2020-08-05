import React, { ReactNode, useState } from 'react';

interface SearchContext {
  searchResults: [];
  setSearchResults(value: []): void;
}

export const SearchContext = React.createContext<SearchContext>({
  searchResults: [],
  setSearchResults: () => {},
});

interface SearchProviderProps {
  children: ReactNode;
}

export const SearchProvider = ({ children }: SearchProviderProps) => {
  const [searchResults, setSearchResults] = useState<[]>([]);

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
