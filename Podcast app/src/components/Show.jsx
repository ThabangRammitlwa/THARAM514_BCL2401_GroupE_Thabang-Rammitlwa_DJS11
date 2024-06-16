
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Show = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios.get('https://podcast-api.netlify.app')
      .then(response => {
        setShows(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the shows!', error);
      });
  }, []);

  return (
    <div>
      <h1>Shows</h1>
      {shows.map(show => (
        <div key={show.id}>
          <h2>{show.title}</h2>
          <p>Genre: {show.genre}</p>
          <Link to={`/season/${show.id}`}>View Seasons</Link>
        </div>
      ))}
    </div>
  );
};

export  Show;
