import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Preview } from '../types/data'; 

const Genre = () => {
  const [previews, setPreviews] = useState<Preview[]>([]);

  useEffect(() => {
    axios
      .get<Preview[]>('https://podcast-api.netlify.app')
      .then(response => {
        setPreviews(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the previews!', error);
      });
  }, []);

  const getGenreIds = (): number[] => {
    const genreIds = new Set<number>();
    previews.forEach(preview => preview.genreIds.forEach(id => genreIds.add(id)));
    return Array.from(genreIds);
  };

  const getGenreTitle = (genreId: number): string => {
    switch (genreId) {
      case 1:
        return 'Personal Growth';
      case 2:
        return 'Investigative Journalism';
      case 3:
        return 'History';
      case 4:
        return 'Comedy';
      case 5:
        return 'Entertainment';
      case 6:
        return 'Business';
      case 7:
        return 'Fiction';
      case 8:
        return 'News';
      case 9:
        return 'Kids and Family';
      default:
        return '';
    }
  };

  return (
    <div>
      <h1>Genres</h1>
      {getGenreIds().map(genreId => (
        <div key={genreId}>
          <Link to={`/genre/${genreId}`}>{getGenreTitle(genreId)}</Link>
        </div>
      ))}
    </div>
  );
};

export default Genre;

