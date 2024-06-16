
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const Season = () => {
  const { id } = useParams();
  const [seasons, setSeasons] = useState([]);

  useEffect(() => {
    axios.get(`https://podcast-api.netlify.app`)
      .then(response => {
        setSeasons(response.data.seasons);
      })
      .catch(error => {
        console.error('There was an error fetching the seasons!', error);
      });
  }, [id]);

  return (
    <div>
      <h1>Seasons</h1>
      {seasons.map((season, index) => (
        <div key={index}>
          <h2>Season {season.seasonNumber}</h2>
          {season.episodes.map(episode => (
            <div key={episode.id}>
              <Link to={`/episode/${episode.id}`}>{episode.title}</Link>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Season;
