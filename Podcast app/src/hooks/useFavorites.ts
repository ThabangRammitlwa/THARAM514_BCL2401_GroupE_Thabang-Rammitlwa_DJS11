import { useState, useEffect } from 'react';
import { Episode } from '../types/data';
import { getFavouritesFromStorage, addFavouriteToStorage, removeFavouriteFromStorage } from '../utils/storageUtils';

export const useFavourites = () => {
  const [favourites, setFavourites] = useState<Episode[]>([]);

  useEffect(() => {
    const storedFavourites = getFavouritesFromStorage();
    setFavourites(storedFavourites);
  }, []);

  const addFavourite = (favourite: Episode) => {
    addFavouriteToStorage(favourite);
    setFavourites((prevFavourites) => [...prevFavourites, favourite]);
  };

  const removeFavourite = (favouriteId: number) => {
    removeFavouriteFromStorage(favouriteId);
    setFavourites((prevFavourites) => prevFavourites.filter((favourite) => favourite.id !== favouriteId));
  };

  return { favourites, addFavourite, removeFavourite };
};