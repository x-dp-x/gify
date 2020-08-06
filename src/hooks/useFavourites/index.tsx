import { useContext } from 'react';
import { FavouritesContext } from '../../contexts/FavouritesContext';
import { SearchResult } from '../../types/searchResult';

// TODO: save and load favourites to localStorage to persist state

export const useFavourites = () => {
  const { favourites, setFavourites } = useContext(FavouritesContext);

  return {
    favourites,
    setFavourites,
    addToFavourites: (newFavourite: SearchResult) => {
      // NOTE: Ideally this would live on the BE, with the BE returning
      // the updated array. If the amount of favourites
      // is very large this could be costly
      const alreadyFavourited = favourites.some(
        (favourite) => favourite.id === newFavourite.id,
      );

      if (!alreadyFavourited) {
        const amendedFavouriteList = [...favourites, newFavourite];
        setFavourites(amendedFavouriteList);
      }
    },
  };
};
