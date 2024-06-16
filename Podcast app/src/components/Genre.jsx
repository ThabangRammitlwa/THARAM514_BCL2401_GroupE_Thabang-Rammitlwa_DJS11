
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Genre = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    axios.get('https://podcast-api.netlify.app')
      .then(response => {
        setGenres(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the genres!', error);
      });
  }, []);

  return (
    <div>
      <h1>Genres</h1>
      {genres.map(genre => (
        <div key={genre.id}>
          <Link to={`/genre/${genre.id}`}>{genre.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Genre;

