import { useContext } from 'react';
import { FavouritesContext } from '../../contexts/FavouritesContext';
import { SearchResult } from '../../types/searchResults';

export const useSearch = () => {
  const { favourites, setFavourites } = useContext(FavouritesContext);

  return {
    favourites,
    setFavourites,
    addToFavourites: (newFavourite: SearchResult) => {
      const amendedFavouriteList = [...favourites, newFavourite];
      setFavourites(amendedFavouriteList);
    },
  };
};
