import { Episode } from "../types/data";

export const getFavouritesFromStorage = (): Episode[] => {
  const favourites = localStorage.getItem('favourites');
  return favourites ? JSON.parse(favourites) : [];
};

export const addFavouriteToStorage = (favourite: Episode) => {
  const favourites = getFavouritesFromStorage();
  favourites.push(favourite);
  localStorage.setItem('favourites', JSON.stringify(favourites));
};

export const removeFavouriteFromStorage = (favouriteId: number) => {
  const favourites = getFavouritesFromStorage();
  const updatedFavourites = favourites.filter((favourite) => favourite.id !== favouriteId);
  localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
};