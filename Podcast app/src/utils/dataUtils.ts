import { Genre, Preview, Show } from "../types/data";

export const sortShowsByTitle = (shows: Preview[], order: 'asc' | 'desc' = 'asc') => {
  return [...shows].sort((a, b) => {
    const titleA = a.title.toLowerCase();
    const titleB = b.title.toLowerCase();
    if (titleA < titleB) return order === 'asc' ? -1 : 1;
    if (titleA > titleB) return order === 'asc' ? 1 : -1;
    return 0;
  });
};

export const sortShowsByUpdated = (shows: Preview[], order: 'asc' | 'desc' = 'asc') => {
  return [...shows].sort((a, b) => {
    const dateA = new Date(a.updated);
    const dateB = new Date(b.updated);
    if (dateA < dateB) return order === 'asc' ? -1 : 1;
    if (dateA > dateB) return order === 'asc' ? 1 : -1;
    return 0;
  });
};

export const filterShowsByGenre = (shows: Preview[], genres: Genre[], selectedGenreIds: number[]) => {
  return shows.filter((show) => {
    if (selectedGenreIds.length === 0) return true;
    return show.genreIds.some((genreId) => selectedGenreIds.includes(genreId));
  });
};