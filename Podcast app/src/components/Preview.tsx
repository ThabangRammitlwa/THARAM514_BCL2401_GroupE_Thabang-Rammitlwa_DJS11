import { useEffect, useState } from 'react';

const PodcastPreview = () => {
  const [previews, setPreviews] = useState([]);

  useEffect(() => {
    const fetchPreviews = async () => {
      const response = await fetch('https://podcast-api.netlify.app');
      const data = await response.json();
      setPreviews(data);
    };

    fetchPreviews();
  }, []);

  return (
    <div>
      <h1>Podcast Previews</h1>
      <ul>
        {previews.map((preview) => (
          <li key={preview.id}>
            <h2>{preview.title}</h2>
            <p>{preview.description}</p>
            <img src={preview.image} alt={preview.title} />
            <p>Seasons: {preview.seasons}</p>
            <p>Genres: {preview.genreIds.join(', ')}</p>
            <p>Last Updated: {preview.updated}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PodcastPreview;