import {get} from './services.common';

export const getMovies = async () => {
  const data = await get('https://api.tvmaze.com/search/shows?q=all');
  if (data.isSuccessful) return data.data;
};

export const searchMovieQuery = async (searchTerm: string) => {
  const response = await get(
    `https://api.tvmaze.com/search/shows?q=${searchTerm}`,
  );
  if (response.isSuccessful) return response.data;
};
