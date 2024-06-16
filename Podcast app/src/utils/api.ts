const API_BASE_URL = 'https://podcast-api.netlify.app';

export const fetchPreviews = async (): Promise<Preview[]> => {
  const response = await fetch(`${API_BASE_URL}`);
  return response.json();
};

export const fetchGenre = async (id: number): Promise<Genre> => {
  const response = await fetch(`${API_BASE_URL}/genre/${id}`);
  return response.json();
};

export const fetchShow = async (id: number): Promise<Show> => {
  const response = await fetch(`${API_BASE_URL}/id/${id}`);
  return response.json();
};