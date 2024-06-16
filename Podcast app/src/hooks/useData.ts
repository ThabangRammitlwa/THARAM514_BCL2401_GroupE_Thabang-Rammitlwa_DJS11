import { useState, useEffect } from 'react';
import { fetchPreviews, fetchGenre, fetchShow } from '../utils/api';
import { Preview, Genre, Show } from '../types/data';

export const useData = () => {
  const [previews, setPreviews] = useState<Preview[]>([]);
  const [genres, setGenres] = useState<{ [key: number]: Genre }>({});
  const [shows, setShows] = useState<{ [key: number]: Show }>({});

  useEffect(() => {
    const fetchData = async () => {
      const previewsData = await fetchPreviews();
      setPreviews(previewsData);

      const genresData = await Promise.all(
        previewsData.flatMap((preview) => preview.genreIds).map((id) => fetchGenre(id))
      );
      const genresMap = genresData.reduce((acc, genre) => {
        acc[genre.id] = genre;
        return acc;
      }, {} as { [key: number]: Genre });
      setGenres(genresMap);
    };

    fetchData();
  }, []);

  const fetchShowData = async (id: number) => {
    if (!shows[id]) {
      const showData = await fetchShow(id);
      setShows((prevShows) => ({ ...prevShows, [id]: showData }));
    }
  };

  return { previews, genres, shows, fetchShowData };
};