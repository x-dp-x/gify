import React, { ReactNode, useState } from 'react';
import { SearchResult } from '../../types/searchResults';

interface FavouritesContextProps {
  favourites: SearchResult[] | [];
  setFavourites(value: SearchResult[] | []): void;
}

export const FavouritesContext = React.createContext<FavouritesContextProps>({
  favourites: [],
  setFavourites: () => {},
});

interface FavouritesProviderProps {
  children: ReactNode;
}

export const FavouritesProvider = ({ children }: FavouritesProviderProps) => {
  const [favourites, setFavourites] = useState<SearchResult[] | []>([]);

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        setFavourites,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
